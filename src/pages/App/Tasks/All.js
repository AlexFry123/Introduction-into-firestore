import { TaskForm, TasksList } from "../../../domains/Tasks/components";
import { Container, Input } from "@qonsoll/react-design";
import { getDocs, query, collection, setDoc, doc, deleteDoc,where, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../services/firebase";
import { useState, useEffect } from "react";
import {v4 as uuid} from 'uuid'

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const subscribeOnTasksCollection = onSnapshot(collection(firestore, "tasks"),(snapshot) => {
        const tasksData = snapshot.docs.map((doc) =>{
            const docData = doc.data()
            const date = docData.date.toDate()
            return {...docData, date}
         });
       setTasks(tasksData);
    })  

    return () => {
        subscribeOnTasksCollection && subscribeOnTasksCollection()
    }
  }, []);

  const createTask = async ({ title }) => {
    const date = new Date()
    const done = false
    const id = uuid()

    const newTask = {title,date,done,id}

    const newTaskQuery = query(doc(firestore,'tasks', id))
    await setDoc(newTaskQuery,newTask)
  };

  const setTaskDone = async (id) => {
    const updateQuery = query(doc(firestore, 'tasks', id))
    await setDoc(updateQuery,{done: true},{merge:true})

  };

  const deleteTask = async (id) => {
    const deletedTaskQuery = query(doc(firestore,'tasks', id))
    await deleteDoc(deletedTaskQuery)
    };

  const searchTasks = async (event) => {
    const title = event.target.value
    if(title === '') return
    const searchQuery = query(collection(firestore,'tasks'),where('title', '==',title))
    const snapshot = await getDocs(searchQuery)
    const searchedTasks = snapshot.docs.map((doc) =>{
        const docData = doc.data()
        const date = docData.date.toDate()
        return {...docData, date}
     })
     setTasks(searchedTasks)
  }

  return (
    <Container>
      <Input onChange={searchTasks} placeholder="Search" />
      <TasksList tasks={tasks} onDelete={deleteTask} onDone={setTaskDone} />
      <TaskForm onFinish={createTask} />
    </Container>
  );
};

export default Tasks;
