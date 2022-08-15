import React from "react";
import style from "styled-components";
import "./button.css";

const Button = style.button`
width:200px;
height:50px;
color:${(props) => props.text};

border: 1px solid black;
width: 30px;
height: 20px;
font-size: 16px;
  margin-top: 25px;
background-color: ${(props) => props.color};
&:hover{
    cursor:pointer;
    background-color:${(props) => props.hover};
    
}
`;

export default Button;
