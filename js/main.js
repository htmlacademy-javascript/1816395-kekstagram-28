import { getPictures } from './generateMockData.js';
import { generateDom } from './thumbnails.js';
import './renderBigImage.js';

const data = getPictures();
generateDom(data);
// renderBigImage();
