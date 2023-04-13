import './util.js';
import './api.js';
import './handler_form_validator.js';
import { getData } from './api.js';
import { takeData } from './render_big_image.js';
import { renderDefaultThumbnails } from './handler_filters.js';


getData(renderDefaultThumbnails, takeData);

