import React from 'react'
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

export default class App extends React.Component {
    constructor () {
        super()
        this.state = {
            items: [],
            currentItems: {text: '', key: ''},
        }
        this.inputElement = React.createRef();
    }


    handleInput = e => {
        const itemText = e.target.value
        const currentItems = {text: itemText, key: Date.now()}
        console.log(currentItems)
        this.setState({
            currentItems,
        })
    }

    addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItems
        if (newItem.text !== '') {
            console.log(newItem)
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItems: {text: '', key: ''},
            })
        }
    }

    render () {
        return (
          <div className="App">
            <TodoList 
                addItem={this.addItem}
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                currentItem={this.state.currentItems}
                 />
            <TodoItems
                entries={this.state.items}
                />
          </div>
        )
    }
}