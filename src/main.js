import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    render() {
        return <h1 style={{color: 'red'}}>{this.props.children}</h1>
    }
}

class Greeter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "Bruce Wayne"}
    }

    render() {
        return (
            <div>
                <Header>Hello {this.state.name}</Header>
                <input type='text' ref='name'/>
                <button onClick={this.handleGreet.bind(this)}>Greet!</button>
            </div>
        )
    }

    handleGreet() {
        var name = ReactDOM.findDOMNode(this.refs.name);
        console.log(name)
        this.setState({name: name.value})
    }

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('will receive props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('component update')
        return nextState.name !== this.state.name
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('will update')
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('did update')
    }

    componentWillUnmount() {
        console.log('will unmount')
    }
}

const GreeterFactory = React.createFactory(Greeter)

class App extends React.Component {
    render() {
        return <Greeter name="Bruce Wayne"/>
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"))