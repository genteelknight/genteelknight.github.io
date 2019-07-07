// @ts-ignore
import { LodashCloneDeep, LodashEscape, LodashPick } from 'lodash/ts3.1/fp';

const escape: LodashEscape = require('lodash.escape');
const pick: LodashPick = require('lodash.pick');
const cloneDeep: LodashCloneDeep = require('lodash.clonedeep');

const _ = {
  escape,
  pick,
  cloneDeep,
};

export default _;
