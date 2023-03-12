import { getEmployees } from './generateMockData.js';
import { generateDom } from './thumbnails.js';

const data = getEmployees();
generateDom(data);
