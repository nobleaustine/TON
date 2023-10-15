import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #010101;
  background: linear-gradient;
    108deg,
    rgba(1. 147, 86, 1) 0%,
    rgba(10, 201, 122 , 1) 100%
);
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #010101;

  @media screen and (max-width: 400px) {
   height: 80%;
  }
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer
  display: flex;
  justify-self: flex-start

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`
export const SavedProjectH1 = styled.h1`
 color: #fff;
 font-size: 65px;
 text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
 `