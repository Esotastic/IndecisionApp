//JSX - JavaScript XML

class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {
            visibility: false,
        };
    }
    handleToggleVisibilty() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibilty}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Here are some details.</p>
                    </div>
                )}
            </div>
        );
    }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));