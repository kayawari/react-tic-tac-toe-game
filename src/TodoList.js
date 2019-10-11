import React from 'react';

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="Task" />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}