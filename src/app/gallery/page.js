'use client';

import { Suspense, useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';

// Component to handle image loading with a fallback
function ImageWithFallback({ src, alt, className }) {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? `https://picsum.photos/${className.includes('h-48') ? '300/192' : '200/300'}` : src}
      alt={alt}
      width={300}
      height={className.includes('h-48') ? 192 : 300}
      className={className}
      onError={() => !error && setError(true)}
      priority={false}
    />
  );
}

function Carousel({ images, carouselId }) {
  const handleScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor jump
    const targetElement = document.getElementById(targetId.substring(1)); // Remove '#' from href
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Changed from 'nearest' to 'center'
        inline: 'start'
      });
    }
  };

  return (
    <div className="carousel w-full">
      {images.map((image, index) => {
        const slideId = `carousel-${carouselId}-slide${index + 1}`;
        const prevSlideId = `#carousel-${carouselId}-slide${index === 0 ? images.length : index}`;
        const nextSlideId = `#carousel-${carouselId}-slide${index === images.length - 1 ? 1 : index + 2}`;

        return (
          <div key={index} id={slideId} className="carousel-item relative w-full">
            <Image 
              src={image}
              alt=""
              width={300}
              height={192}
              className="w-full h-48 object-cover"
              priority={index === 0}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <Link href={prevSlideId} className="btn btn-circle btn-sm" onClick={(e) => handleScroll(e, prevSlideId)}>❮</Link>
              <Link href={nextSlideId} className="btn btn-circle btn-sm" onClick={(e) => handleScroll(e, nextSlideId)}>❯</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}


// Skeleton component for loading state
function SkeletonCard() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-0 pt-0"> {/* Adjusted padding for skeleton */}
        <div className="skeleton h-48 w-full"></div> {/* Skeleton for image/carousel */}
      </figure>
      <div className="card-body items-start text-left"> {/* Adjusted alignment */}
        <div className="skeleton h-6 w-3/4 mb-4"></div> {/* Skeleton for title */}
        <div className="skeleton h-4 w-full mb-2"></div> {/* Skeleton for description line 1 */}
        <div className="skeleton h-4 w-5/6"></div>       {/* Skeleton for description line 2 */}
      </div>
    </div>
  );
}

// Generic Gallery Section Component
function GallerySection({ title, data, isLoading }) {
  if (isLoading) {
    // Show skeleton loaders while data is loading
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {[...Array(5)].map((_, i) => <SkeletonCard key={i} />)} {/* Show 5 skeletons */}
        </div>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-center">No items to display in this section.</p>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      {/* Update grid column classes for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {data.map((item, index) => (
          // Wrap each card in Suspense (optional here as data is pre-fetched, but kept for consistency)
          <Suspense key={`${title}-${index}`} fallback={<SkeletonCard />}>
            <div className="card bg-base-100 shadow-xl h-full flex flex-col"> {/* Ensure card takes full height and uses flex */}
              <figure className="flex-shrink-0"> {/* Prevent figure from shrinking */}
                {item.src.length > 1 ? (
                  <Carousel images={item.src} carouselId={`${title}-${index}`} />
                ) : (
                  /* Use ImageWithFallback for single images */
                  <ImageWithFallback
                    src={item.src[0]}
                    alt={item.title || ""}
                    className="w-full h-48 object-cover" />
                )}
              </figure>
              <div className="card-body flex-grow"> {/* Allow body to grow */}
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                {/* Removed card-actions as it wasn't used */}
              </div>
            </div>
          </Suspense>
        ))}
      </div>
    </section>
  );
}


export default function GalleryPage() {
  const [renderData, setRenderData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [isLoadingRender, setIsLoadingRender] = useState(true);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Render Data
        const renderRes = await fetch('/gallery-data/gallery-render.json');
        if (!renderRes.ok) throw new Error(`Failed to fetch render data: ${renderRes.statusText}`);
        const renderJson = await renderRes.json();
        setRenderData(renderJson);
        setIsLoadingRender(false);

        // Fetch Photo Data
        const photoRes = await fetch('/gallery-data/gallery-photo.json');
        if (!photoRes.ok) throw new Error(`Failed to fetch photo data: ${photoRes.statusText}`);
        const photoJson = await photoRes.json();
        setPhotoData(photoJson);
        setIsLoadingPhoto(false);

      } catch (err) {
        console.error("Error fetching gallery data:", err);
        setError(err.message);
        setIsLoadingRender(false); // Stop loading indicators on error
        setIsLoadingPhoto(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  // The outer Suspense can remain for overall page loading indication if needed,
  // but the inner Suspense handles per-item loading.
  // Using isLoading state for a more granular loading display per section.
  return (
     <Suspense fallback={<div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>}>
       <div className="container mx-auto px-4 py-8">
         {error && <div className="alert alert-error mb-8"><p>Error loading gallery: {error}</p></div>}

         {/* Photography Section */}
         <GallerySection title="Photography" data={photoData} isLoading={isLoadingPhoto} />

         {/* Divider */}
         <div className="divider my-8"></div>

         {/* 3D Renders Section */}
         <GallerySection title="3D Renders" data={renderData} isLoading={isLoadingRender} />
       </div>
    </Suspense>
  );
}
