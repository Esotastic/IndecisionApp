"use strict";

//JSX - JavaScript XML

var app = {
    name: "Visibility Toggle",
    details: "These are some details!",
    detailToggle: false
};

var showDetails = function showDetails(e) {
    e.preventDefault();

    app.detailToggle ? app.detailToggle = false : app.detailToggle = true;

    renderOptions();
};

var renderOptions = function renderOptions() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.name
        ),
        React.createElement(
            "button",
            { onClick: showDetails },
            "Click to show details!"
        ),
        app.detailToggle && React.createElement(
            "p",
            null,
            app.details
        )
    );
    ReactDOM.render(template, document.getElementById("app"));
};

renderOptions();
