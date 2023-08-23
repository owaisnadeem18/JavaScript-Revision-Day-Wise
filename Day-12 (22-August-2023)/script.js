// Now , we have to take a look on 'strings' in JavaScript

// we can write strings in 2 ways . 1st way is enclosing anything in single inverted commas or enclosing anything in double inverted commas is the 2nd way to write strings in Java Script

// For example

// first_way = "My Name = Owais" // first way to write a string

// second_way = 'My Name = Owais' // second way to write a string

// String Methods:

// Following are the some string methods which we have to discuss here

// myName = "Owais Nadeem";
// console.log(myName.length); // In this way you can count the number of letters present in any string

// Escape Character

//                               \"Text\"

// myName = "My name is: Owais Nadeem & my role is 'Front End Web Developer'";
// console.log(myName);

// Method 02 -> Finding a string in a string
// We will use string method indexof() to find a string in a string . keep it in mind that this method is also case sesitive

// let searching_in_array = "My role is front end web development";
// console.log(searching_in_array.indexOf("end")); // Indexof() search from zero (0) index to onwards

// Method 03 -> Finding a string in a string
// We will use string method Lastindexof() to find a string in a string . keep it in mind that this method is also case sesitive . Lastindexof() is used to find the string in a string from backward position in a string

// let searching_in_array = "My role is front end web development";
// console.log(searching_in_array.lastIndexOf("end", 5)); // It wil find array after the index (05) in the string , that's why it has returned (-1) as the output

// Method 04 -> Searching for a string in a string
// -> Searching for a string in a string <-

// If we want to search for a string in a string , then we have to use string method of search() . The difference between indexof() , lastIndexof() and search() is that search() only searches for a string from zero position till end . It does not have the option of searching from a specific index or to search from backward

// let data = "My name is Owais nadeem";

// let search_data = data.search("Nadeem"); // if a string is not present during the search operation. Then , it will return (-1) as a result
// console.log(search_data);

// Method 05 -> Slicing a string
// For slicing a struing we use another method which is (slice) method in JavaScript

// let string = "My Name is Owais Nadeem";
// console.log(string.length);
// let sliced_string = string.slice(5, -5); // will not print last 05 numbers from the string because of this (-) sign
// console.log(sliced_string);

// console.log(string); // It does not modify the orginal array

// -----------------------------------------------------------------------
// Quick Task :
// Here we've to print a tweet on our console on which we just have to print the maximum 280 characters

// let tweet =
//   "Interestingly, this isn't a problem everywhere people Tweet. For example, when I (Aliza) Tweet in English, I quickly run into the 140 character limit and have to edit my Tweet down so it fits. Sometimes, I have to remove a word that conveys an important meaning or emotion, or I don’t send my Tweet at all. But when Iku Tweets in Japanese, he doesn’t have the same problem. He finishes sharing his thought and still has room to spare. This is because in languages like Japanese, Korean, and Chinese you can convey about double the amount of information in one character as you can in many other languages, like English, Spanish, Portuguese, or French.";

// let printTweet = tweet.length;
// console.log(printTweet);

// let max_words = tweet.slice(0, 279);
// console.log(max_words); // printed a tweet whose characters are not more than 280
// -----------------------------------------------------------------------

// Now we have another method , whose name is substring()

// let strings = "Owais Nadeem";

// let newString = strings.substring(6); // will print after the index number written in substring()
// console.log(newString);

// let strings = "Owais Nadeem";
// let newString = strings.substring(8, -4); // will print after the index number written in substring()
// console.log(newString);

// Now we have another method , whose name is substr()

// let strings = "Owais Nadeem";
// let newString = strings.substr(7, -5); // will not print anything and will give the result as empty

// console.log(newString);

// Question ? If they all are behaving in the same way , then what is the benifit of using strings.substr()
// Answer : When We want to print the numbers from backwards , then this method substr() is the perfect choice :)

// for example
// let strings = "Owais Nadeem";
// let newString = strings.substr(-6); // will print the last numbers from the backward direction
// console.log(newString);

// We have a new string method whose name is "replace()"

// let string = "Owais Nadeem I'm repeating Owais Nadeem";
// let replacedString = string.replace("Owais", "owais"); // will print after the index number written in substring()
// console.log(replacedString);

// This is a string method in which we can see that it will just replace the first element with our respective desire . But , will not replace all the characters present in our string

// Note: It does not modify the new data
// console.log(string);
// It is case sensitive method .
// By default , it's only replace the first method present in our replace() method

// X-------------------------------------------------------------------------X