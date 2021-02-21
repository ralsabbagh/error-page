var boxLoader = getElmntByClass('box-loader');
boxLoader.setAttribute('style', 'transform: scale(1.1);');

var pathLoader = getElmntByClass('path-loader');
pathLoader.setAttribute('cx', '50%');
pathLoader.setAttribute('cy', '50%');
pathLoader.setAttribute('r', '20');
pathLoader.setAttribute('fill', 'none');
pathLoader.setAttribute(
  'style',
  'stroke: #797574; animation: 3s linear 0s infinite normal none running ring-outer'
);

var transformLoader = getElmntByClass('transform-loader');
transformLoader.setAttribute('attributeName', 'transform');
transformLoader.setAttribute('type', 'rotate');
transformLoader.setAttribute('from', '0 50 50');
transformLoader.setAttribute('to', '360 50 50');
transformLoader.setAttribute('dur', '1s');
transformLoader.setAttribute('repeatCount', 'indefinite');

var pathLoaderInner = getElmntByClass('path-loader-inner');
pathLoaderInner.setAttribute('cx', '50');
pathLoaderInner.setAttribute('cy', '50');
pathLoaderInner.setAttribute('r', '14');
pathLoaderInner.setAttribute('fill', 'none');
pathLoaderInner.setAttribute(
  'style',
  'stroke: #797574; animation: 3s linear 0s infinite normal none running ring-inner'
);

var transformLoaderInner = getElmntByClass('transform-loader-inner');
transformLoaderInner.setAttribute('attributeName', 'transform');
transformLoaderInner.setAttribute('type', 'rotate');
transformLoaderInner.setAttribute('from', '360 50 50');
transformLoaderInner.setAttribute('to', '0 50 50');
transformLoaderInner.setAttribute('dur', '1s');
transformLoaderInner.setAttribute('repeatCount', 'indefinite');
