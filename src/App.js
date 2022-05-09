import React, { useEffect, useState } from "react";
import { FormCrud } from "./Component/FormCrud/FormCrud";
import { ChakraProvider } from '@chakra-ui/react'
import {GetAll} from '../src/Redux/Action/action'
import {useDispatch,useSelector} from 'react-redux'
import { TableCrud } from "./Component/TableCrud/TableCrud";
import { Stack,Box} from '@chakra-ui/react'
import {TitleCrud} from '../src/Component/TitleCrud/TitleCrud'
import style from '../src/Style/style.css'


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
      <Stack className="style" bg='gray.900' style={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
        <Box mb={3}>
        <TitleCrud/>
        </Box>
        <Stack style={{ display: 'flex',flexDirection: 'row-reverse',alignItems: 'center',justifyContent: 'space-around',flexWrap: 'nowrap'}}>
        <Box ml={10}>
        <TableCrud list={list} setInputs={setInputs} input={input} />
        </Box>
        <Box  >
        <FormCrud list={list} setInputs={setInputs} input={input} />
        </Box>
        </Stack>
       </Stack>
    </ChakraProvider>
    
  );
}

export default App;
