import { Suspense } from 'react';

export const metadata = {
  title: 'Gallery | My Portfolio',
  description: 'View my photography and 3D modeling work',
};

export default function GalleryLayout({ children }) {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    }>
      {children}
    </Suspense>
  );
}
