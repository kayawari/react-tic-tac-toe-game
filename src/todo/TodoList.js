import React from 'react';

export default class TodoList extends React.Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input 
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                            />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}