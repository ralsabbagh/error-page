function getFont() {
  if (getParameterByName('lang') === 'ar') return 'tajawal';
  if (getParameterByName('lang') === 'en') return 'circe';
}

addClass(document.getElementsByClassName('page')[0], getFont());
