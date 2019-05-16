import React, { useEffect } from "react";
import classStyle from "./Cockpit.module.css";

const cockpit = props => {
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  //   //HTTP request...
  //   setTimeout(() => {
  //     alert("Saved to cloud");
  //   }, 1000);

  //   return () => {
  //     console.log("[Cockpit.js] cleanup work in useEffect");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("[Cockpit.js] 2nd useEffect");
  //   return () => {
  //     console.log("[Cockpit.js] cleanup work in 2nd effect");
  //   };
  // });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classStyle.red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classStyle.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classStyle.bold);
  }

  return (
    <div className={classStyle.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.onClick}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
