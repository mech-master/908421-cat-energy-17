var js_navigationButton__unavailable = document.querySelector(".js-navigation-button--unavailable");
js_navigationButton__unavailable.classList.remove("js-navigation-button--unavailable");

var js_mainNavigation__unavailable = document.querySelector(".js-main-navigation--unavailable");
js_mainNavigation__unavailable.classList.remove("js-main-navigation--unavailable");

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
