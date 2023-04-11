
import { getData } from './api.js';
import { takeData } from './renderBigImage.js';
import './util.js';
import './handlerFormValidator.js';
import './api.js';
import { renderDefaultThumbnails } from './handlerFilters.js';


getData(renderDefaultThumbnails, takeData);

