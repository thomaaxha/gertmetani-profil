import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Youtube, Calendar, X } from 'lucide-react';
import { useYouTubeVideos } from '../services/youtube';

const InterviewsPage: React.FC = () => {
  const { videos } = useYouTubeVideos();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideoPreview = (videoId: string) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoPreview = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      <Helmet>
        <title>Interviews - Gert Metani for State Senate</title>
        <meta name="description" content="Watch interviews and discussions with Gert Metani about key policy issues and campaign initiatives." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Dalje televizive dhe intervista</h1>
          <p className="text-gray-600 mb-12">Shiko intervistat dhe diskutimet më të fundit rreth çështjeve kyçe që ndikojnë në shtetin tonë dhe rreth çështjeve ku zotëroj kompetencat profesionale</p>
          <div className="space-y-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div 
                    className="md:w-2/5 relative group cursor-pointer"
                    onClick={() => openVideoPreview(video.id)}
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Youtube className="text-white" size={48} />
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h2 className="text-xl font-semibold text-green-800 mb-2">{video.title}</h2>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{video.publishedAt}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => openVideoPreview(video.id)}
                      className="inline-flex items-center mt-4 text-green-700 hover:text-green-600 font-medium"
                    >
                      Shiko intervistën
                      <Youtube size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Preview Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideoPreview}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewsPage;