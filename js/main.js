import { getEmployees } from './generateMockData.js';
import { generateDom } from './thumbnails.js';
import './renderBigImage.js';

const data = getEmployees();
generateDom(data);
// renderBigImage();
