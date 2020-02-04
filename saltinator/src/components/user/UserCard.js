import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Card = styled.div`
display: flex;
justify-content: space-between;
width: 40vw;
padding-left: 20px;
padding-right: 20px;
margin: 10px;
background-color: #97adce;
`
const Button = styled.button`
background-color: #2a3c58;
color: white;
// width: 25%;
height: 35px;
font-family: "Roboto Mono", monospace;
&:hover{
background-color: #3E5982;
`

const UserCard = props => {
  return (
    <Card><br/>
        "{props.comment.comment}"<br/>
        - {props.comment.username}
        
        <Button>Save</Button>
    </Card>
  );
};
export default UserCard;
