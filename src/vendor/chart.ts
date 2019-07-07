// tslint:disable-next-line:variable-name
const Chart = require('chart.js/dist/Chart');
const $html = $('html');
Chart.defaults.global.defaultFontColor = $html.css('color');
Chart.defaults.global.defaultFontFamily = $html.css('font-family');
Chart.defaults.global.defaultFontSize = parseInt($html.css('font-size'), 10);
export default Chart;
