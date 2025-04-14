import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image
            src="/portrait.png"
            alt="Virat's Portrait"
            width={200}
            height={200}
            className="rounded-lg shadow-2xl mx-auto mb-8"
            priority
          />
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="py-6">Explore my photography and 3D modeling projects. Dive into the gallery to see my work!</p>
          <Link href="/gallery" className="btn btn-primary">View Gallery</Link>
        </div>
      </div>
    </div>
  );
}
