// Fetching Data Using API

let fetchApi = async () => {
  console.log("getting data ... ");
  const url = "https://api.thedogapi.com/v1/images/search";
  let response = await fetch(url);
  console.log(response);

  let json_data = await response.json();
  console.log(json_data[0].url);
  console.log(response);

  console.log(`The response of our request is = ${response.status}`);

  let img_api = document.getElementById("img_api");

  img_api.innerHTML = `<img src= "${json_data[0].url}" > `;
};

// fetchApi();
