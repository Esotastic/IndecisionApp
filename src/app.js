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



const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);