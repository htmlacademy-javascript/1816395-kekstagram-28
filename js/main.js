import './util.js';
import './api.js';
import './handler-form-validator.js';
import { getData } from './api.js';
import { takeData } from './render-big-image.js';
import { renderDefaultThumbnails } from './handler-filters.js';

getData(renderDefaultThumbnails, takeData);

