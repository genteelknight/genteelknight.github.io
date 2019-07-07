import Chart from './vendor/chart';
import $ from './vendor/jquery';

const $chartCanvas = $('.Skills_chart-canvas');

const chartData = Array.from($('.Skills_item')).map(el => {
  const $el = $(el);
  return Object.assign($el.data(), { title: $el.find('.Skills_item-title').text() });
});
chartData.push(chartData.shift());

const chartColor = $('.Skills_chart-color').css('background-color');

const skillChart = new Chart($chartCanvas, {
  type: 'radar',
  data: {
    labels: chartData.map(i => i.title),
    datasets: [
      {
        data: chartData.map(i => i.skillLevel),
        backgroundColor: Chart.helpers
          .color(chartColor)
          .alpha(0.95)
          .rgbString(),
        borderColor: chartColor,
        pointBackground: chartColor,
      },
    ],
  },
  options: {
    legend: { display: false },
    scale: {
      pointLabels: { fontSize: Chart.defaults.global.defaultFontSize },
      ticks: {
        display: false,
        beginAtZero: true,
        stepSize: 10,
        max: 100,
      },
      gridLines: {
        drawTicks: false,
        drawBorders: false,
      },
    },
  },
});

$chartCanvas.prop('skillChart', skillChart);
