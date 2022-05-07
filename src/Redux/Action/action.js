import axios from 'axios'
import {deleteUser,updateUser,postUser,setUser} from '../Slice/index'

export const GetAll = () => (dispacth) =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
          console.log(res.data)
        dispacth(setUser(res.data))  
      })
  }
  
  export const delUser = (id) => (dispacth) =>{
    dispacth(deleteUser(id))
  
  }
  
  export const patchUser = (newUser) => (dispacth) =>{
    dispacth(updateUser(newUser))
  
  }
  export const createUser = (newUser) => (dispacth) =>{
    dispacth(postUser(newUser))
  
  }