// @ts-ignore
import gravatarUrl from 'gravatar-url';
import $ from './vendor/jquery';

const avatar = gravatarUrl('genteelknight@gmail.com', { size: 350, default: 'retro' });

$('.About_avatar').html(
  `<img src="${avatar}" alt="Константин Карнаухов / Constantine Karnaukhov / hustlahusky" />`,
);
