// @ts-ignore
import { LodashCloneDeep, LodashEscape, LodashPick, LodashTemplate } from 'lodash/ts3.1/fp';

const escape: LodashEscape = require('lodash.escape');
const pick: LodashPick = require('lodash.pick');
const cloneDeep: LodashCloneDeep = require('lodash.clonedeep');
const template: LodashTemplate = require('lodash.template');

const _ = {
  escape,
  pick,
  cloneDeep,
  template,
};

export default _;
