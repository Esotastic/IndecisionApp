//JSX - JavaScript XML

const app = {
    name: "Visibility Toggle",
    details: "These are some details!",
    detailToggle: false
};

const showDetails = (e) => {
    e.preventDefault();

    app.detailToggle ? app.detailToggle = false : app.detailToggle = true;

    renderOptions();
}

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.name}</h1>
            <button onClick = {showDetails}>Click to show details!</button>
            {app.detailToggle && <p>{app.details}</p>}
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
}

renderOptions();