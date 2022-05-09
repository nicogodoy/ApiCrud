import React from "react";
import { FormControl, FormLabel, Input, Button} from "@chakra-ui/react";
import {useDispatch} from 'react-redux'
import { patchUser,createUser } from "../../Redux/Action/action";
import { Text } from '@chakra-ui/react'
import Swal from 'sweetalert2'



export const FormCrud = ({setInputs, input,list}) => {
  
  const dispatch = useDispatch()

 const handleSubmit =(e)=>{
  e.preventDefault()
  if(input.id){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Has editado un usuario correctamente!',
      showConfirmButton: false,
      timer: 2000
    })
    dispatch(patchUser(input))
 
  }else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Has agregado un usuario correctamente!',
      showConfirmButton: false,
      timer: 2000
    })
    dispatch(createUser(input))
  }
    setInputs({
      name:"",
      email:"",
      id: null
    })
 
  
}

 const handleChange = (e)=>{
    setInputs({...input,[e.target.id]: e.target.value})
 }


  return (
    <>
      <form onSubmit={handleSubmit} style={{display:' flex',flexDirection: 'column',alignItems: 'stretch'}}>
        <Text fontSize='20px' as='em' >Agregar/Editar usuario</Text>
        <FormControl isRequired>
          <FormLabel  htmlFor="name">Nombre</FormLabel>
          <Input id="name" placeholder="Nombre" value={input.name} onChange={handleChange}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={3} htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Email" type="email" value={input.email} onChange={handleChange}/>
        </FormControl>
        <Button mt={4} colorScheme='teal' variant='solid' type="submit">
         { input.id ? "Editar" : "Agregar"}
        </Button>
      </form>
    </>
  );
};