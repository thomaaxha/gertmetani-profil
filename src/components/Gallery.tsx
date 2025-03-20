import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const campaignPhotos = [
  {
    url: "src/img/gallery/gm-hartakamez.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani per Kamzën"
  },
  {
    url: "src/img/gallery/gm-hartakavaje.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani per Kavajën"
  },
  {
    url: "src/img/gallery/gm-hartarrogozhine.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani per Rrogozhinën"
  },
  {
    url: "src/img/gallery/gm-hartatirane.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani per Tiranën"
  },
  {
    url: "src/img/gallery/gm-hartavore.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani per Vorën"
  },
  {
    url: "src/img/gallery/gm-albitrim.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani në albitrim"
  },
  {
    url: "src/img/gallery/gm-prezantim.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani në prezantim"
  },
  {
    url: "src/img/gallery/gm-zyre.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani në zyrën e tij"
  },
  {
    url: "src/img/gallery/gm-televizion.jpeg?auto=format&fit=crop&w=800",
    caption: "Gert Metani në televizion"
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev'
      ? (selectedImage - 1 + campaignPhotos.length) % campaignPhotos.length
      : (selectedImage + 1) % campaignPhotos.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {campaignPhotos.map((photo, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openModal(index)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 w-full text-center bg-black bg-opacity-50">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-gray-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-4xl w-full mx-4">
            <img
              src={campaignPhotos[selectedImage].url}
              alt={campaignPhotos[selectedImage].caption}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">
              {campaignPhotos[selectedImage].caption}
            </p>
          </div>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-gray-300"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;