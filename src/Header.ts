import { TypeIt } from './vendor';
import * as _ from 'lodash';
import $ = require('jquery');

const headerLogo = $('.HeaderLogo');

const strings = headerLogo
  .get(0)
  .innerHTML.split('<br>')
  .map(a => a.trim());

const replaceStrings = headerLogo.data('replace-text').map((a: string) => _.escape(a.trim()));

headerLogo.get(0).innerHTML = null;

const writeTypes = new TypeIt(headerLogo.get(0), {
  speed: 50,
  afterComplete: () => $('.HeaderScroll').removeClass('uk-invisible'),
})
  .type(strings[0])
  .break()
  .type(strings[1])
  .pause(500)
  .delete()
  .type(replaceStrings[0])
  .break()
  .type(replaceStrings[1]);

$(window).one('scroll', e => {
  if (window.scrollY > $('.Header').height()) return;
  $('html, body').animate({ scrollTop: $('.About').offset().top - 75 }, 250);
});
