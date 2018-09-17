import { UIkit } from './vendor';
import $ = require('jquery');

const successHash = '#ContactSuccess';
const redirectTo: HTMLInputElement = document.querySelector('.ContactForm [name=redirect_to]');
redirectTo.value = location.origin + location.pathname + successHash;

if (location.hash === successHash) {
  $(successHash).removeClass('uk-hidden');
  const scroll = UIkit.scroll($('body'));
  setTimeout(() => scroll.scrollTo(successHash), 500);
  scroll.$destroy();
}
