//JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "An app for those who just don't know.",
    options: ["one", "two"]
}


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options.length > 0) ? "Here are your options " + app.options : "No options provided."}</p>
    </div>
);

const user = {
    name: "Chris Jimenez",
    age: 30,
    location: "Davie, FL"
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);