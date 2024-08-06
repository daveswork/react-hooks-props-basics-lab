import React from "react";
import Links from "./Links";

function About(props) {


  function myBio(){
    if(props.bio){
      return <p>{props.bio}</p>
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {myBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github={props.github}/>
    </div>
  );
}

export default About;
