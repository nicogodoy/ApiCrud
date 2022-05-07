import React, { useEffect, useState } from "react";
import { FormCrud } from "./Component/FormCrud/FormCrud";
import { ChakraProvider } from '@chakra-ui/react'
import {GetAll} from '../src/Redux/Action/action'
import {useDispatch,useSelector} from 'react-redux'
import { TableCrud } from "./Component/TableCrud/TableCrud";



function App() {
  const [input,setInputs]= useState({
    name:"",
    email:"",
    id: null
 }) 

 const dispatch = useDispatch()
 const {list} = useSelector(state => state.users)

 
  useEffect(() => {
    
    dispatch(GetAll());
   
  }, [dispatch]);

  return (
   

    <ChakraProvider>
        <TableCrud list={list} setInputs={setInputs} input={input} />
        <FormCrud list={list} setInputs={setInputs} input={input} />
    </ChakraProvider>
    
  );
}

export default App;
