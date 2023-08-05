import React from 'react';


function TodoItem(props){
    return(
        <div className='TodoItem'>
            <input type="checkbox" checked={props.item.completed}></input><span>{props.item.text}</span><br></br>
        </div>
    )
}

export default TodoItem;

// import React from 'react';
// import TodoItem from './Components/TodoItem';
// import TodosData from './Components/TodosData';

// class  App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       todos:TodosData
//     }
//   }
//   render(){
//     const todo =this.state.todos.map(item => <TodoItem key={item.id} item={item} />);

//     return (
//       <div className='TodoList'>
//         {todo}
//       </div>
//     );
//   }
  
//   }
 
// export default App;
