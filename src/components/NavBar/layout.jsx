import styled from "styled-components";

export const Bar = styled.div`
width: 80px;
height: 100vh;
flex-direction: column;
background-color: #111111;
position: fixed;
`;

export const Options = styled.button`
 width: 65px;
 height: 65px;
 margin: 18px 0;
 border-radius: 50px;
 background: #313131;
  border: none;
  padding: 15px 15px;
 :hover{
    background: rgba(100, 100, 100, 0.8);
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
 }
`;