import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


// export const GetAll = () => (dispacth) =>{
//   axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>{
//         console.log(res.data)
//       dispacth(setUser(res.data))  
//     })
// }

// export const delUser = (id) => (dispacth) =>{
//   dispacth(deleteUser(id))

// }

// export const patchUser = (newUser) => (dispacth) =>{
//   dispacth(updateUser(newUser))

// }
// export const createUser = (newUser) => (dispacth) =>{
//   dispacth(postUser(newUser))

// }

export const userSlice = createSlice({
    name: 'users',
    initialState : {
        list : []
    },
    reducers : {
      setUser:(state,action) =>{
          state.list = action.payload; //trae los datos a la lista
        },
        deleteUser :(state,action) => {
          state.list =  state.list.filter((user)=>{
          return user.id !== action.payload
        })
      },
      updateUser :(state,action) => {
        state.list =  state.list.map((user)=>{
          if(user.id=== action.payload.id){
             return action.payload
          }
          return user
      })
    },
    postUser :(state,action) => {
      state.list =  [...state.list, {...action.payload,id:state.list.length+1} ]
  }
    }
})



  export const {setUser,deleteUser, updateUser, postUser} = userSlice.actions

  export default userSlice.reducer