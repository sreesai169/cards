import React from "react";
import data from "./data/data.json";
import Profile from "./profile.jpg";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function Resume(props) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));

  let info = data.profiles[props.location.profilesData.i];
  console.log(info.basic);
  return (
    <div className="row justify-content-center">
      <div className="col-lg-3 m-2">
        <div className="card">
          <div className="card-body">
            <img src={Profile} style={{ width: "300px" }} />
            <h2>{info.basic.name}</h2>
            <h3>{info.basic.role}</h3>
            <h4>
              <a href="tel:8919791594">{info.basic.Phone}</a>
            </h4>
            <p>
              <a href="mailto:sreesai169@gmail.com">{info.basic.email}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-8 m-2">
        <div className="card">
          <div className="card-body">
            <h2>Career Object:</h2>
            <p>{info.career}</p>
            <hr />
            <h2>Educational qualifications:</h2>
            <Table border="2px">
              <Thead>
                <Tr>
                  <Th>{info.head.name}</Th>
                  <Th>{info.head.degree}</Th>
                  <Th>{info.head.year}</Th>
                  <Th>{info.head.percent}</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>{info.eduactionalqualification.institute}</Td>
                  <Td>{info.eduactionalqualification.degree}</Td>
                  <Td>{info.eduactionalqualification.passoutyear}</Td>
                  <Td>{info.eduactionalqualification.percentage}</Td>
                </Tr>
                <Tr>
                  <Td>{info.edu.institute}</Td>
                  <Td>{info.edu.degree}</Td>
                  <Td>{info.edu.passoutyear}</Td>
                  <Td>{info.edu.percentage}</Td>
                </Tr>
                <Tr>
                  <Td>{info.education.institute}</Td>
                  <Td>{info.education.degree}</Td>
                  <Td>{info.education.passoutyear}</Td>
                  <Td>{info.education.percentage}</Td>
                </Tr>
              </Tbody>
            </Table>
            <hr />
            <h2>Technical Skills:</h2>

            <h4 style={{ textAlign: "left" }}>
              <strong>Programming skills : </strong>
              <span style={{ fontSize: "16px" }}>{info.techskills.Pro}</span>
            </h4>
            <hr />

            <h2>Achievements:</h2>
            <p>{info.Achievements}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
