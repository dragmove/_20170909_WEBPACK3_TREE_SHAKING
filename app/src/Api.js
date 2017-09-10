let getProfile = function (name) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: `https://api.github.com/users/${name}`

    }).done(function( data, textStatus, jqXHR ) {
      resolve(data, textStatus, jqXHR);

    }).fail(function( jqXHR, textStatus, errorThrown) {
      let error = new Error('getProfile error');
      error.jqXHR = jqXHR;

      reject(error);
    });
  });
};

let getRepos = function (name) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: `https://api.github.com/users/${name}/repos`

    }).done(function( data, textStatus, jqXHR ) {
      resolve(data, textStatus, jqXHR);

    }).fail(function( jqXHR, textStatus, errorThrown) {
      let error = new Error('getRepos error');
      error.jqXHR = jqXHR;

      reject(error);
    });
  });
};

export {
  getProfile,
  getRepos
}