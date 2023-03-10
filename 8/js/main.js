import { getEmployees } from './generateMockData.js';
import { generateDom } from './thumbnails.js';

generateDom(getEmployees());
