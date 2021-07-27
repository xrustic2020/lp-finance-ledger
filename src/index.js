import './styles/main.scss';
import './scripts/html-chunks/html-chunked'

import refs from './scripts/refs'
import showFixedHeader from './scripts/showFixedHeader'
import navLinkScrolling from './scripts/navLinkScrolling'
import submitCallbackForm from './scripts/submitCallbackForm'

// import './scripts/additional/lightbox-plus-jquery.min.js'
// import './scripts/additional/lightbox.min.js';

window.addEventListener('scroll', showFixedHeader);

refs.navigation.addEventListener('click', navLinkScrolling)
refs.home.addEventListener('click', navLinkScrolling)

refs.callbackForm.addEventListener('submit', submitCallbackForm)
