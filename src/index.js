import './styles/main.scss';

// import './scripts/additional/lightbox-plus-jquery.min.js'
// import './scripts/additional/lightbox.min.js';

import header from './html/header.html'
import featuresList from './html/featured-list.html';
import individualSolution from './html/individual-solution.html';
import cases from './html/cases.html'
import blogPost from './html/blog-post.html'
import team from './html/team.html';
import contact from './html/contact.html'

const markup = [
  header,
  featuresList,
  individualSolution,
  cases,
  blogPost,
  team,
  contact
]

const body = document.querySelector('body');
body.innerHTML = markup.join('');

