//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "An app for those who just don't know."
}


var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var user = {
    name: "Chris Jimenez",
    age: 30,
    location: "Davie, FL"
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);



var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);