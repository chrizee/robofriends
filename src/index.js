import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App />,document.getElementById("root"));
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.timerId = setInterval(() => {
            this.setState({date: new Date()});
        },1000);
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <p>The time is {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
ReactDOM.render(<Clock />, document.getElementById('root'));
*/
/*class TestFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            select: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelect = (e) => {
        this.setState({
            select: e.target.value
        });
    }
    handleChange(e) {
        this.setState({
            value: e.target.value.toUpperCase()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.value);
        this.setState({value: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    <input name="name" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </label>
                <select value={this.state.select} onChange={this.handleSelect}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </form>
        );
    }

}

ReactDOM.render(<TestFrom />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/