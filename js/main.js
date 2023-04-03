// import { DATA } from './generateMockData.js';
import { generateDomThumbnails } from './renderThumbnails.js';
import { APImethods } from './api.js';
import { takeData } from './renderBigImage.js';
import './util.js';
import './renderBigImage.js';
import './renderUpload.js';
import './handlerScale.js';
import './handlerFormValidator.js';
import './handlerFormEffects.js';
import './api.js';


// generateDomThumbnails(DATA);
APImethods.getData()
  .then((pictures) => {
    console.log(pictures);
    generateDomThumbnails(pictures);
    takeData(pictures);
  })
  .catch(
    (err) => {
      // showAlert(err.message);
    }
  );
