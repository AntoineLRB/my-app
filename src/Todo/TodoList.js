import React, {Component} from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput:'',
            items: []
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.userInput]
        }, () => console.log(this.state));
    }   

    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    } 
    
    renderTodos(event){
        return this.state.items.map((item) => {
            return (
                <div align="center" className="list-group-item" key={item}>
                {item}| <button onClick={this.deleteTodo.bind(this)} className="btn btn-primary">x</button>
                </div>
            );
        });  
    } 

    render() {
        return(
            <div>
                <h1 align="center" background-color="#FF5733">Ma Todo List</h1>
                <form align="center">
                    <input
                        value={this.state.userInput}
                        type="text"
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2 textcenter"
                        
                    />
                    <button 
                    onClick={this.addTodo.bind(this)}
                    className="btn btn-primary"
                    align="center"
                    >Ajouter</button>
                </form>
                <div className="list-group" align="center">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;

