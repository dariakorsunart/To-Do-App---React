import {Component} from "react";
import check from './check.png';

export class ToDoApp extends Component {
state = {
    userInput: "",
    toDoList: []
}

onChangeEvent(e){
    this.setState({userInput:e})
    /*console.log(e);*/
}

addItem(input) {
    if (input === '') {
        alert("Please enter an item!")
    } else {
    let listArray=this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList: listArray, userInput: ''})
    }
}

crossedWord(event) {
    const list = event.target;
    list.classList.toggle('crossed');
}

deleteItem() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList:listArray})
}

onFormSubmit(e) {
 e.preventDefault();
}

 render() {
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What are your plans for today?" 
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={()=> this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>

            <ul>{this.state.toDoList.map((item,index)=>(
                <li onClick={this.crossedWord} key={index}> 
                <img src={check} width="30px" alt="check mark"/>{item}
                </li>
            ))}</ul>
            <div className="container">
                <button onClick={()=>this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
        </div>
    )
 }

}