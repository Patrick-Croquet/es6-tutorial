/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/mortgage2.js":
/*!*************************!*\
  !*** ./js/mortgage2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mortgage)
/* harmony export */ });
class Mortgage {
  constructor(principal, years, rate) {
    this.principal = principal;
    this.years = years;
    this.rate = rate;
  }

  get monthlyPayment() {
    let monthlyRate = this.rate / 100 / 12;
    return this.principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), this.years * 12));
  }

  get amortization() {
    let monthlyPayment = this.monthlyPayment;
    let monthlyRate = this.rate / 100 / 12;
    let balance = this.principal;
    let amortization = [];

    for (let y = 0; y < this.years; y++) {
      let interestY = 0;
      let principalY = 0;

      for (let m = 0; m < 12; m++) {
        let interestM = balance * monthlyRate;
        let principalM = monthlyPayment - interestM;
        interestY = interestY + interestM;
        principalY = principalY + principalM;
        balance = balance - principalM;
      }

      amortization.push({
        principalY,
        interestY,
        balance
      });
    }

    return amortization;
  }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mortgage2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mortgage2 */ "./js/mortgage2.js");

document.getElementById('calcBtn').addEventListener('click', () => {
  let principal = document.getElementById("principal").value;
  let years = document.getElementById("years").value;
  let rate = document.getElementById("rate").value;
  let mortgage = new _mortgage2__WEBPACK_IMPORTED_MODULE_0__["default"](principal, years, rate);
  document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
  let html = "";
  mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="flex">
                    <div class="bar principal"
                         style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                    </div>
                    <div class="bar interest"
                         style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                    </div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);
  document.getElementById("amortization").innerHTML = html;
});
})();

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map