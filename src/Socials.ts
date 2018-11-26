import $ = require('jquery');
import * as _ from 'lodash';

const SOCIALS = {
  vk: {
    link: 'https://vk.com/hustlahusky',
    icon: '#vk-logo-svg',
  },
  telegram: {
    link: 'https://t.me/hustlahusky',
    icon: '#telegram-logo-svg',
  },
  instagram: {
    link: 'https://www.instagram.com/hustlahusky',
    icon: 'instagram',
  },
  github: {
    link: 'https://github.com/hustlahusky',
    icon: 'github',
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/constantine-karnaukhov-58ba45130/',
    icon: 'linkedin',
  },
  mail: {
    link: 'mailto:genteelknight@gmail.com',
    icon: 'mail',
    classList: ['uk-button-primary'],
  },
};

$('.Socials').each((a, block) => {
  const $block = $(block);
  const params = $block.data();

  let socials = _.cloneDeep(SOCIALS);
  if (params.socials) {
    if (!Array.isArray(params.socials)) {
      params.socials = [params.socials];
    }

    socials = <any>_.pick(socials, ...params.socials);
  }

  const html = Object.keys(socials)
    .map(
      i => `
      <a
        href="${socials[i].link}"
        rel="nofollow noopener"
        target="_blank"
        class="Socials_item Socials_item--${i} uk-icon-button${
        socials[i].classList && socials[i].classList.length
          ? socials[i].classList.reduce((a: string, c: string) => `${a} ${c}`, '')
          : ''
      }"
        ${!socials[i].icon.startsWith('#') ? `uk-icon="icon: ${socials[i].icon}; ratio: 1.5"` : ''}
      >
        ${
          socials[i].icon.startsWith('#')
            ? `<img uk-svg="width: 30; height: 30;" src="${
                document.querySelector(socials[i].icon).href
              }">`
            : ''
        }
      </a>
    `,
    )
    .join('');

  $block.html(html).addClass(`Socials--count-${Object.keys(socials).length}`);
});
