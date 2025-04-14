import { interviews } from '../data/interviews';

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
}

export const useYouTubeVideos = () => {
  // Transform the local data to include thumbnail URLs
  const videos = interviews.map(video => ({
    ...video,
    // Using YouTube's thumbnail service directly
    thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
  }));

  return {
    videos,
    isLoading: false,
    error: null
  };
};