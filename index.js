const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    console.log("Hello!");
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.Num_1);
    var num2 = Number(req.body.Num_2);
    var result = num1 + num2;

    res.send(`<h3>Sum of ${num1} and ${num2}: ${result}</h3>`);
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);


    res.send(`<h3>Your BMI: ${bmi}</h3>`);
});

app.listen(5000, function () {
    console.log("Server is listening on port:5000");
});