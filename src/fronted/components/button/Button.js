import React from "react";
import style from "styled-components";
import "./button.css";

const Button = style.button`
width:65px;
color:${(props) => props.text};
border: 1px solid black;
font-size: 16px;
margin-top: 25px;
  background-color: ${(props) => props.color};
&:hover{
    cursor:pointer;
    background-color:${(props) => props.hovercolor};
    color:${(props) => props.hovertext};
    
}

`;

export default Button;
