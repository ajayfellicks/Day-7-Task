//ARRAY METHODS

//!a.Get all the countries from Asia continent /region using Filter function

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.region === "Asia");
  var final = res.forEach((ele) => console.log(ele.name.common));
};

//!b.Get all the countries with a population of less than 2 lakhs using Filter function

const request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data = request1.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.population < 200000);
  var final = res.forEach((ele) => console.log(ele.name.common));
};

//!c.Print the following details name, capital, flag, using forEach function

const request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data = request2.response;
  var result = JSON.parse(data);
  var final = result.forEach((ele) =>
    console.log(
      `name: ${ele.name.common}, capital: ${ele.capital}, flag: ${ele.flag}`
    )
  );
};

//!d.Print the total population of countries using reduce function

const request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data = request3.response;
  var result = JSON.parse(data);
  var res = result.map((ele) => ele.population);
  var final = res.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
  console.log(final);
};

//!e.Print the country that uses US dollars as currency

const request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", true);
request4.send();
request4.onload = function () {
  var data = request4.response;
  var result = JSON.parse(data);
  var curr = result.filter((ele) => ele.currencies && ele.currencies.USD);
  curr.forEach((value) => console.log(value.name.common));
};
