import refs from './refs'

const navLinkScrolling = function (evt) {
  evt.preventDefault();
  const hash = evt.target.attributes[0].value
  const linkTo = document.querySelector(hash).offsetTop;
  setTimeout(() => {
    const scrollHeight =
      linkTo - refs.siteHeader.clientHeight;
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth',
    });
  }, 300);
}

export default navLinkScrolling;