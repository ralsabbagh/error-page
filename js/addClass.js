function addClass(element, className) {
  var arr = element.className.split(' ');
  if (arr.indexOf(className) == -1) {
    element.className += ' ' + className;
  }
}
