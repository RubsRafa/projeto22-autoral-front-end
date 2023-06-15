import styled from "styled-components";

export const HumorBox = styled.div`
background-color: ${props => props.color && props.color};
width: 70%;
margin: 8px auto;
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
border-radius: 5px;
div{
    display: flex;
    flex-wrap: nowrap;
    align-self: center;
    padding: 4px;
    justify-content: space-between;
}
h1{
    align-self: center;
    font-size: 16px;
    margin-right: 5px;
}
:hover{
    padding: 1px;
    border: 1px solid #fff;
    transition: all 0.2s ease-in-out;
}
`;