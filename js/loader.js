var loaderSvg = document.getElementById('loaderSvg');
loaderSvg.setAttribute('class', 'box-loader');
loaderSvg.setAttribute('style', 'transform: scale(1.1);');

var circle1 = document.getElementById('loaderCircle1');
circle1.setAttribute('class', 'path-loader');
circle1.setAttribute('cx', '50%');
circle1.setAttribute('cy', '50%');
circle1.setAttribute('r', '20');
circle1.setAttribute('fill', 'none');
circle1.setAttribute(
  'style',
  'stroke: #797574; animation: 3s linear 0s infinite normal none running ring-outer'
);

var animateTransform1 = document.getElementById('animateTransform1');
animateTransform1.setAttribute('attributeName', 'transform');
animateTransform1.setAttribute('type', 'rotate');
animateTransform1.setAttribute('from', '0 50 50');
animateTransform1.setAttribute('to', '360 50 50');
animateTransform1.setAttribute('dur', '1s');
animateTransform1.setAttribute('repeatCount', 'indefinite');

var circle2 = document.getElementById('loaderCircle2');
circle2.setAttribute('class', 'path-loader-inner');
circle2.setAttribute('cx', '50');
circle2.setAttribute('cy', '50');
circle2.setAttribute('r', '14');
circle2.setAttribute('fill', 'none');
circle2.setAttribute(
  'style',
  'stroke: #797574; animation: 3s linear 0s infinite normal none running ring-inner'
);

var animateTransform2 = document.getElementById('animateTransform2');
animateTransform2.setAttribute('attributeName', 'transform');
animateTransform2.setAttribute('type', 'rotate');
animateTransform2.setAttribute('from', '360 50 50');
animateTransform2.setAttribute('to', '0 50 50');
animateTransform2.setAttribute('dur', '1s');
animateTransform2.setAttribute('repeatCount', 'indefinite');
