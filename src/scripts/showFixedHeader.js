import throttle from 'lodash.throttle'
import refs from './refs'

const showFixedHeader = throttle(() => {
  const currentScroll = window.scrollY;
  if (currentScroll > 170) {
    refs.siteHeader.classList.add('header--fixed')
  } else {
    refs.siteHeader.classList.remove('header--fixed')
  }
}, 100);

export default showFixedHeader;