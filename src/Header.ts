import TypeIt from './vendor/typeit';
import _ from './vendor/lodash';
import $ from './vendor/jquery';
import UIkit from './vendor/uikit';

const headerLogo = $('.HeaderLogo');

const strings = headerLogo
  .get(0)
  .innerHTML.split('<br>')
  .map((a: string) => a.trim());

const replaceStrings = headerLogo.data('replace-text').map((a: string) => _.escape(a.trim()));

headerLogo.get(0).innerHTML = null;

const $headerScroll = $('.HeaderScroll');
UIkit.scroll($headerScroll, { duration: 250, offset: 75 });

new TypeIt(headerLogo.get(0), {
  speed: 50,
  waitUntilVisible: true,
  afterComplete: () => $headerScroll.removeClass('uk-invisible'),
})
  .type(strings[0])
  .break()
  .type(strings[1])
  .pause(500)
  .delete()
  .type(replaceStrings[0])
  .break()
  .type(replaceStrings[1]);

$(window).one('scroll', () => {
  if (window.scrollY > $('.Header').height()) return;
  UIkit.scroll($headerScroll).scrollTo('.About');
});
