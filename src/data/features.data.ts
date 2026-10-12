import bookmarkingImg from '@/assets/illustration-features-tab-1.svg';
import searchingImg from '@/assets/illustration-features-tab-2.svg';
import sharingImg from '@/assets/illustration-features-tab-3.svg';

export type FeatureData = {
  id: string;
  label: string;
  imageSrc: string;
  title: string;
  description: string;
};

export const FEATURES: FeatureData[] = [
  {
    id: 'bookmarking',
    label: 'Simple Bookmarking',
    imageSrc: bookmarkingImg,
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 'searching',
    label: 'Speedy Searching',
    imageSrc: searchingImg,
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 'sharing',
    label: 'Easy Sharing',
    imageSrc: sharingImg,
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];
