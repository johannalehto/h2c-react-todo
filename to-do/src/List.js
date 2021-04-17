import uuid from 'react-uuid'
import Form from './Form';
import Row from './Row';
import { Todo } from './Todo';
import './List.css';
import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state ={todos: new Array(new Todo('Sat morning', 'Laundry'))};
    }

    addToList = (title, description) => {
        this.setState(prevState => ({
            todos: [...prevState.todos, new Todo(title, description)]
        }))
    }

    render() {
        return (
            <>
            <div className="container">
                <div className="note col-12 col-md-8 col-lg-6">
                    <div className="content me-auto ms-auto">
                        <h3>To-Do List</h3>
                        <Form add={this.addToList}/>
                        <table >
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody className="border-top">
                                {this.state.todos.map(item => (
                                    <Row key={uuid()} title={item.title} description={item.description} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="text-center">Johanna Lehto 2021 ｜ Made with React</p>
            </div>
            </>
        )
    }
}