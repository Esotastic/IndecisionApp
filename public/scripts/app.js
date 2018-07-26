"use strict";

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "An app for those who just don't know."
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var user = {
    name: "Chris Jimenez",
    age: 30,
    location: "Davie, FL"
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
