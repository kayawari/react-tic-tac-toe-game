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

    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems
        })
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
                deleteItem={this.deleteItem}
                />
          </div>
        )
    }
}