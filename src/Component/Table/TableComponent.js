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

export const TableComponent = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.length === 0 && <p>cargando</p>}
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
                <Tr>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Button>Eliminar</Button>
                    <Button>Editar</Button>
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
