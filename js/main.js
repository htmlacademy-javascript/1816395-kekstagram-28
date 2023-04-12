import './util.js';
import './api.js';
import './handlerFormValidator.js';
import { getData } from './api.js';
import { takeData } from './renderBigImage.js';
import { renderDefaultThumbnails } from './handlerFilters.js';


getData(renderDefaultThumbnails, takeData);

