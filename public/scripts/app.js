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

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
