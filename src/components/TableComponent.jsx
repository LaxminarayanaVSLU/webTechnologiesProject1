import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

const DataTable = ({ data, tableHeader }) => {
  const getColumnNames = (data) => {
    if (data.length > 0) {
      return Object.keys(data[0]);
    }
    return [];
  };

  const allColumnnames = getColumnNames(data);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center", // Optional: centers text within the div
        }}
        className="content"
      >
        <h5>{tableHeader}</h5>
      </div>
      <Table
        striped
        bordered
        hover
        data-aos="fade-up"
      >
        <thead>
          <tr>
            {allColumnnames.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              {allColumnnames.map((columnName) => (
                <td>{user[columnName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
