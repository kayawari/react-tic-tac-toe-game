import React from 'react'

export default class BindingSample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyupResult: '',
        }
    }

    onInput = e => {
        this.setState({keyupResult: e.target.value})
    }

    render() {
        return (
            <div>
                <input onInput={(e) => this.onInput(e)} />
                <p>{this.state.keyupResult}</p>
            </div>
        )
    }
}