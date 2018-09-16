import * as gravatar from 'gravatar';
import $ = require('jquery');

const avatar = gravatar.url('genteelknight@gmail.com', { size: '350', default: 'retro' });

$('.About_avatar').html(`<img src="${avatar}" alt="Константин Карнаухов / Constantine Karnaukhov / hustlahusky" />`);
