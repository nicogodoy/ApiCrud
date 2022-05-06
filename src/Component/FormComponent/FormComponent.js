import React from "react";
import { FormControl, FormLabel, Input, Button} from "@chakra-ui/react";

export const FormComponent = ({setData,data,setInputs, input, id, setId}) => {

 const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(id)
  if(id){
    const newData = data.map((user)=>{
      if(user.id=== id){
         return {...input, id}
      }
      return user
    })
    setData(newData)
  }else{
    
    setData((data)=>{
      return [...data, {name:e.target.name.value,email:e.target.email.value, id:data.length+1}]
    })
  }
    setInputs({
      name:"",
      email:""
    })
    setId(null)
  
}

 const handleChange = (e)=>{
    setInputs({...input,[e.target.id]: e.target.value})
 }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input id="name" placeholder="Nombre" value={input.name} onChange={handleChange}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" value={input.email} onChange={handleChange}/>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
         { id ? "Editar" : "Agregar"}
        </Button>
      </form>
    </>
  );
};
