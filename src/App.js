import React, { useEffect, useState } from "react";
import GetAll from "./Servicie/servicie";
import { TableComponent } from "./Component/Table/TableComponent";
import { Form } from "./Component/Form/Form";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetAll().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
     
        <TableComponent data={data} />
        <Form />
      
    </>
  );
}

export default App;
