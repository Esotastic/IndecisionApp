"use strict";

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "An app for those who just don't know.",
    options: ["one", "two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options " + app.options : "No options provided."
    )
);

var user = {
    name: "Chris Jimenez",
    age: 30,
    location: "Davie, FL"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
