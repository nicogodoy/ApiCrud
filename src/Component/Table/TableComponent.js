import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import Swal from 'sweetalert2'

export const TableComponent = ({ data, setData, setInputs, setId }) => {



const handleDelete = (id) => {
  Swal.fire({
    title: 'Estas seguro que quieres eliminar?',
    text: "no podras recuperarlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo eliminarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
      const newData =  data.filter((user)=>{
        return user.id !== id
      })
      console.log(newData)
      setData(newData)
      Swal.fire(
        'Eliminado!',
        'El usuario fue eliminado correctamente.',
        'success'
      )
    }
  })
}
const handlePatch = (id) => {
  const newData = data.filter((user)=>{
   return user.id === id 
  })
  setInputs({
    name:newData[0].name,
    email:newData[0].email,
  })
  setId(id)
 }

  return (
    <>
      {data.length === 0 && <p>No hay usuarios registrados</p>}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nombre</Th>
              <Th>Email</Th>
              <Th>Acción</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Button onClick={()=>{handleDelete(user.id)}}>Eliminar</Button>
                    <Button onClick={()=>{handlePatch(user.id)}}>Editar</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
