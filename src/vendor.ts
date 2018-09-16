import $ = require('jquery');
(<any>window).$ = $;
(<any>window).jQuery = $;

// tslint:disable-next-line:variable-name
export const UIkit = require('uikit/dist/js/uikit');

// tslint:disable-next-line:variable-name
const Icons = require('uikit/dist/js/uikit-icons');

UIkit.use(Icons);
(<any>window).UIkit = UIkit;

// tslint:disable-next-line:variable-name
export const TypeIt = require('typeit/dist/typeit');

// tslint:disable-next-line:variable-name
export const Chart = require('chart.js/dist/Chart');
Chart.defaults.global.defaultFontColor = $('html').css('color');
Chart.defaults.global.defaultFontFamily = $('html').css('font-family');
Chart.defaults.global.defaultFontSize = parseInt($('html').css('font-size'), 10);
