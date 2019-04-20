export function PostData(userData) {
  let BaseURL = "https://this-user-api.herokuapp.com/api/v1/users/login";
  return new Promise((resolve, reject) => {
    fetch(BaseURL, {
      method: "POST",
      headers:new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(userData),
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

