import UIkit from './vendor/uikit';
import $ from './vendor/jquery';
import _ from './vendor/lodash';

const contactFormAlertTemplate = _.template($('#contactFormAlertTemplate').html());

$('.ContactForm').on('submit', async (e: JQuery.SubmitEvent) => {
  e.preventDefault();
  const data = new FormData(e.target);

  let alertParams = {
    status: 'success',
    text: 'Спасибо за Ваше сообщение. Ждите ответа на указанный E-mail.',
  };

  let url = '/wp-json/contact-form-7/v1/contact-forms/3379/feedback';
  if (process.env.NODE_ENV === 'production') {
    url = `https://www.onfire.space/${url}`;
  } else {
    url = `http://spaceonfire.local/${url}`;
  }

  try {
    let { response } = await UIkit.util.ajax(url, {
      data,
      method: 'POST',
      responseType: 'application/json',
    });

    response = JSON.parse(response);

    if (response.status !== 'mail_sent') {
      throw new Error(response.message);
    }

    (<HTMLFormElement>e.target).reset();
  } catch (e) {
    alertParams = {
      status: 'danger',
      text: 'Ваше сообщение не удалось отправить из-за ошибки сервера. Попробуйте позже.',
    };
  }

  $(e.target).before(contactFormAlertTemplate(alertParams));
  const scroll = UIkit.scroll($('body'));
  scroll.scrollTo('.Contact');
  scroll.$destroy();
});
