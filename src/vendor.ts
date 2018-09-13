import $ = require('jquery');
(<any>window).$ = $;
(<any>window).jQuery = $;

export const UIkit = require('uikit/dist/js/uikit');
const Icons = require('uikit/dist/js/uikit-icons');
UIkit.use(Icons);
(<any>window).UIkit = UIkit;

export const TypeIt = require('typeit/dist/typeit');
