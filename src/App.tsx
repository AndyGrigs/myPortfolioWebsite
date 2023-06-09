import React from 'react';
import Card from './components/Card'
import UsersList from './components/UsersList';
import { ITodo, IUser } from './types/types';
import axios from 'axios'
import List from './components/List';
import TodoItem from './components/TodoItem';
import DragGame from './components/DragGame';
import EventsExamle from './components/EventsExamle';

const App: React.FC = () => {

const [users, setUsers] = React.useState<IUser[]>([])
const [todos, setTodos] = React.useState<ITodo[]>([])

React.useEffect(()=>{
 fetchData()
 fetchTodos()
}, [])

async function fetchData(){
    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(responce.data)
    } catch (error) {
      alert(error)
    }
  }
async function fetchTodos(){
    try {
      const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      setTodos(responce.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section>
      {/* <Card 
          width="300px" 
          height="200px" 
          title='Card TypeScript Example'
          backgroundColor="lightblue"
          onPositionChange={() => {
            console.log('Position changed');
          }}
          >
        
        <p>This is a simple card component.</p>
      </Card>
      <List
        items={users}
        renderItem={(user =>  <UsersList key={user.id} users={users}/>)}
      />
      <List
        items={todos}
        renderItem={(todo:ITodo) => <TodoItem key={todo.id} todo={todo}/>}
      /> */}
    
        {/* <DragGame/> */}
        <EventsExamle />
    </section>
  );
};

export default App;
