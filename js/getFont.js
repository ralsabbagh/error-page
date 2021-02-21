function getFont() {
  if (getParameterByName('lang') === 'ar') return 'tajawal';
  if (getParameterByName('lang') === 'en') return 'circe';
}

addClass(getElmntByClass('page'), getFont());
