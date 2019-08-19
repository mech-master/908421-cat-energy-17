var js_navigationButton__unavailable = document.querySelector(".page-header__navigation-button--nojs");
js_navigationButton__unavailable.classList.remove("page-header__navigation-button--nojs");

var js_mainNavigation__unavailable = document.querySelector(".page-header__navigation--nojs");
js_mainNavigation__unavailable.classList.remove("page-header__navigation--nojs");/**/

/*var js_elements__unavailable = document.querySelectorAll(".js-unavailable");
console.log(js_elements__unavailable);
for (var i=0; i<js_elements__unavailable.length; i++) {
  js_elements__unavailable[i].classList.remove("js-unavailable");
};/**/

var pageHeader__navigationButton = document.querySelector(".page-header__navigation-button");
var pageHeader__navigation = document.querySelector(".page-header__navigation");
pageHeader__navigationButton.addEventListener("click", mainNavigationSection__toggle);

function mainNavigationSection__toggle() {
  if (pageHeader__navigationButton.classList.contains("navigation-button--burger")) {
    pageHeader__navigationButton.classList.remove("navigation-button--burger");
    pageHeader__navigationButton.classList.add("navigation-button--close");
    pageHeader__navigation.classList.remove("page-header__navigation--hidden");
  } else {
    pageHeader__navigationButton.classList.remove("navigation-button--close");
    pageHeader__navigationButton.classList.add("navigation-button--burger");
    pageHeader__navigation.classList.add("page-header__navigation--hidden");
  }
};
