import React from "react";
import Exa1 from "./Exa1";
import students from "./students.json";

const Exa = (pros) => {
  const studentArray = students.map((students, key) => {
    return (
      <tr>
        <td>{students.finnish}</td>
        <td>
          <tr>{students.swedish}</tr>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Exa1 />
      <table>{studentArray}</table>
    </div>
  );
};

export default Exa;
