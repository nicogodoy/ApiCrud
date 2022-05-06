import React, { useEffect, useState } from "react";
import GetAll from "./Servicie/servicie";
import { TableComponent } from "./Component/Table/TableComponent";
import { FormComponent } from "./Component/FormComponent/FormComponent";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [data, setData] = useState([]);
  const [input,setInputs]= useState({
    name:"",
    email:"",
 }) 
 const [id,setId]=useState(null)

  useEffect(() => {
    GetAll().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
       
        <TableComponent setData={setData} data={data} setInputs={setInputs} setId={setId}/>
        <FormComponent setData={setData} data={data} setInputs={setInputs} input={input} id={id} setId={setId}/>
      
    </ChakraProvider>
  );
}

export default App;
