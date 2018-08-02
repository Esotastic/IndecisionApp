//JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "An app for those who just don't know.",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderOptions();
    }
}; 

const removeAll = () => {
    app.options.length = 0;
    renderOptions();
}

const appRoot = document.getElementById("app");

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? "Here are your options" : "No options provided."}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All Items</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>   
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderOptions();
