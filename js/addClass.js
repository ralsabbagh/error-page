function addClass(element, className) {
  var isAR, element, arr;
  isAR = window.location.href.indexOf('lang=ar') > -1;
  arr = element.className.split(' ');
  if (arr.indexOf(className) == -1) {
    element.className += ' ' + className;
  }
}
