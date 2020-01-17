import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'
const data = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      todoData: data,
      text:''
    };

  }

  addItem = item =>{
    const newItem={
      task:item,
      id: Date.now(),
      completed:false
    };
    this.setState({todoData:[...this.state.todoData,newItem]});
  };

 toggleItems = id => {
    const newTodoData = this.state.todoData.map(item=>{
        if(item.id===id){
          return{
            ...item,
            completed:!item.completed
          };
        }
        else{
          return item;
        }
      });
      this.setState({
        todoData:newTodoData
      });
    };
  
  clearCompleted=()=>{
    this.setState({
      todoData:this.state.todoData.filter(item=>
       
        !item.completed)

      });
    };
  
    handleChange = event => {
      this.setState({
        text: event.target.value
      });
    };

    handleSubmit = event =>{
      event.preventDefault();
      this.addItem(this.state.text);
    };

  render() {
    return (
     <div className='App'>
       <div className='header'>
         <h1>Todo List!</h1>
       </div>
       <div className='form'>
         <TodoForm
          addItem={this.addItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
          
        
        <TodoList 
        todoData={this.state.todoData} 
        clearCompleted={this.clearCompleted} 
        toggleItems={this.toggleItems}/>
       </div>
     </div>

    );
  }
}

export default App;
