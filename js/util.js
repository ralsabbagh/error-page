// Add class to element
function addClass(element, className) {
  var arr = element.className.split(' ');
  if (arr.indexOf(className) == -1) {
    element.className += ' ' + className;
  }
}

// get element by class name
function getElmntByClass(className) {
  return document.getElementsByClassName(className)[0];
}

// Get url parameter
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
