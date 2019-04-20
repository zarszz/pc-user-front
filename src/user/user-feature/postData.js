export function PostData(userData) {
  let BaseURL = "https://this-user-api.herokuapp.com/api/v1/users/login";
  return new Promise((resolve, reject) => {
    fetch(BaseURL, {
      method: "POST",
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "Application/json",
      },
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

