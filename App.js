import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    // props are passed to our components as static values or methods
    // state is a collection of values that are meant to be managed by the component itself
    constructor() {
        super();
        this.state = { txt: 'this is the state txt' }
    }

    update(e) {
        this.setState({txt: e.target.value});
    }


    render() {
        // jsx way
        // has to return a single node aka like one function
        // return <h1>Hello Guys</h1>;
        return (
            <div>
                <h1>Hello Guys</h1>
                <input type="text" onChange={this.update.bind(this)} />
                <p>{this.state.txt}</p>
                <p>{this.props.txt}</p>
                <p>{this.props.cat}</p>
            </div>
        );
        // react way
        // return React.createElement('h1', null, 'Hello Guys');
    }
}
// Stateless function component
// no states
// const App = () => <h1>Hello Guys</h1>;


// adding prop types we're expecting
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

// adding defaults props
App.defaultProps = {
    txt: 'default txt',
    cat: 5
}


// if no render, we export to make App available/visible
// export default App;

ReactDOM.render(
    <App txt="this is the props text" cat={5} />,
    document.getElementById('app')
)