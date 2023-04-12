import { filtersClass, filterSection, filterElements, mainElements } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';
import { generateDomThumbnails } from './renderThumbnails.js';
import { util } from './util.js';

let serverData;

const filterMethods = {

  renderFilterSection: function () {
    filterSection.style.opacity = 1;
  },


  setFilterRandom: function (currentData) {
    return util.shuffleArray(currentData);
  },

  setFilterDiscussed: function (data) {
    data.sort(
      (firstElement, secondElement) => secondElement.comments.length - firstElement.comments.length
    );
  }

};


const
  renderDefaultThumbnails = (data) => {
    serverData = data;
    generateDomThumbnails(data);
  },

  clearSelectionFilter = () => {
    const selectedFilter = util.getElement(filtersClass.filterSelected, filterSection);
    selectedFilter.classList.remove(util.filterClassName(filtersClass.filterSelected));
  },

  addSelectionFilter = (target) => {
    target.classList.add(util.filterClassName(filtersClass.filterSelected));
  };

const
  filterSelected = (target) => {
    clearSelectionFilter();
    const timeData = serverData.slice();
    switch (target.id) {
      case filterElements.filterRandom.id:
        filterMethods.setFilterRandom(timeData);
        break;
      case filterElements.filterDiscussed.id:
        filterMethods.setFilterDiscussed(timeData);
        break;
    }

    addSelectionFilter(target);
    generateDomThumbnails(timeData);
  };


export { renderDefaultThumbnails, filterMethods };

evtHandler.onClick(
  mainElements.main,
  util.debounce(filterSelected,500),
  util.filterClassName(filtersClass.filterButton)
);
