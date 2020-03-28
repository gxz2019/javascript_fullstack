import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 400px;
  height: 498px;
  /* background-color:rgb(242,242,242); */
  margin:0 auto;
  margin-top:25px;
  display:flex;
  align-items:center;
  justify-content:center;
`
export const InputWrapper = styled.div`
  width: 310px;
  input{
    border:none;
    font-size:14px;
    line-height:50px;
    width: 300px;
    height: 50px;
    background-color:white;
    padding-left:10px;
  }
  input:nth-child(1){
    border:1px 1px 0 1px solid rgb(242,242,242)
  }
  input:nth-child(2){
    border:1px 1px 1px 1px solid rgb(242,242,242)
  }
  button{
    font-size:18px;
    line-height:43px;
    color:#fff;
    
    margin-top:10px;
    border:none;
    border-radius:4px;
    width: 300px;
    height: 43px;
    background-color:rgb(24,125,184);
  }

`