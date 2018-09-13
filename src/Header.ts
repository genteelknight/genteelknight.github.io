import { TypeIt } from './vendor';
import * as _ from 'lodash';
import $ = require('jquery');

const headerLogo = $('.HeaderLogo');

const strings = headerLogo
  .get(0)
  .innerHTML.split('<br>')
  .map(a => a.trim());

const replaceStrings = headerLogo.data('replace-text').map((a: string) => _.escape(a.trim()));

const writeTypes = new TypeIt(headerLogo.get(0), { strings })
  .pause(5000)
  .delete()
  .type(replaceStrings[0])
  .break()
  .type(replaceStrings[1]);
