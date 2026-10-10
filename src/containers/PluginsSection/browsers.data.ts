import chromeImg from '@/assets/logo-chrome.svg';
import firefoxImg from '@/assets/logo-firefox.svg';
import operaImg from '@/assets/logo-opera.svg';

export type BrowserData = {
  name: string;
  minVersion: number;
  logoSrc: string;
};

export const BROWSERS: BrowserData[] = [
  {
    name: 'Chrome',
    minVersion: 62,
    logoSrc: chromeImg,
  },
  {
    name: 'Firefox',
    minVersion: 55,
    logoSrc: firefoxImg,
  },
  {
    name: 'Opera',
    minVersion: 46,
    logoSrc: operaImg,
  },
];
