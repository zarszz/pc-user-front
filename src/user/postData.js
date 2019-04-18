export function PostData(type, userData) {
  let BaseURL = 'https://this-user-api.herokuapp.com/api/v1/users/login/';
  //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
  return new Promise((resolve, reject) => {
    fetch(BaseURL + type, {
      method: 'POST',
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}