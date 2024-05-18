let variable = `{
    "fact": "Two members of the cat family are distinct from all others: the clouded leopard and the cheetah. The clouded leopard does not roar like other big cats, nor does it groom or rest like small cats. The cheetah is unique because it is a running cat; all others are leaping cats. They are leaping cats because they slowly stalk their prey and then leap on it.",
    "length": 354
}`;

let json_to_obj = JSON.parse(variable);

console.log(json_to_obj.length);

// JSON.parse('json_data') is used to convert the JSON data into JS object

// JSON.stringify('json_data') is used to convert the JS object into JSON format

let student = {
  myName: "Owais Nadeem",
  marks: 90,
  Roll_number: 20,
};

console.log(JSON.stringify(student));
