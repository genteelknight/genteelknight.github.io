import UIkit from './vendor/uikit';
import _ from './vendor/lodash';

const query = `
{
  user(login: "hustlahusky") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          nameWithOwner
          description
          forkCount
          homepageUrl
          url
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`;

(async function() {
  try {
    let { response } = await UIkit.util.ajax('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${atob('NDQ2NzAwMWQ1M2Q1NmU1MjllNWViNGFiOGQ0OThlMmVjNGNiNWQ4YQ==')}`,
      },
      data: JSON.stringify({ query }),
    });

    response = JSON.parse(response);

    const projects = response.data.user.pinnedItems.nodes;

    if (Array.isArray(projects) && projects.length === 0) {
      return false;
    }

    const templateScript = $('.Projects-template');
    const projectsGridTempalte = _.template(templateScript.html());
    templateScript.after(projectsGridTempalte({ projects }));

    $('#Projects').removeClass('uk-hidden');
  } catch (e) {
    console.error(e);
  }
})();
