import {getProfile, getRepos} from './Api';

(function ($) {
  'use strict';

  $(document).ready(init);

  function init() {
    aysncAwaitTryCatch('dragmove');
  }

  async function aysncAwaitTryCatch(name) {
    try {
      const user = await getProfile(name);
      console.log('user :', user);

      const repos = await getRepos(user.login);
      console.log('repos :', repos);

    } catch (error) {
      console.log('error.jqXHR :', error.jqXHR);
    }
  }
}(jQuery));