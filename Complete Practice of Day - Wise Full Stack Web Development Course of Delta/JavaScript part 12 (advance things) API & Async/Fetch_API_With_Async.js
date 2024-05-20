// Fetch_API_With_Async

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(res);
    console.log(data.fact);
  } catch (err) {
    console.log("Error - ", err);
  }

  // Now because of the use of try & catch in fetch api data , we can let our JS run the below code

  console.log("My name is Owais Nadeem");
}
