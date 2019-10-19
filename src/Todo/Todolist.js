import React, { Component } from 'react';
import './Todolist.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            items: [],
        };
    }
    onChange(event) {
        this.setState({
            userInput: event.target.value // référence à l'objet value qui a envoyé l'evenement
        });
    }

    addTodo(event){
        //preventDefault évite à la page de se reloader  
        event.preventDefault();
        this.setState({
            userInput:'',
            items: [...this.state.items, this.state.userInput] // on insère le nouvelle item userInput dans le tableau vide items
        });
    }

    renderTodos(){
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    <ListGroup.Item>
                        {item} 
                        <Button 
                            variant="info" 
                            onClick={this.deleteTodo.bind(this, item)}>
                                Delete my task
                        </Button>
                    </ListGroup.Item>
                </div>
            )
        });
    }

    deleteTodo(item){
        const array = this.state.items;
        const index = array.indexOf(item); // je détermine dans mon tableau quel item je veux supprimer   
        array.splice(index, 1);  // supprimer un élement de l'index
        this.setState({
            items: array // mon items sera  egal à mon array après avoir supprimer mon item
        });
     }

    render() {
        return (
            <div style={{margin:"50px auto", textAlign:"center",width:"60%"}}>
                <h1>My ToDoList</h1>
                <Form>
                    <Form.Control 
                    value={this.state.userInput} 
                    type="text" 
                    placeholder="Enter your task" 
                    onChange={this.onChange.bind(this)}
                    />
                    <Button 
                        variant="dark" 
                        onClick={this.addTodo.bind(this)}>
                        Add
                    </Button>
                </Form>
                <div>
                <ListGroup>
                    {this.renderTodos()}
                </ListGroup>
                </div>
            </div>

        );
    }
}

export default Todolist;