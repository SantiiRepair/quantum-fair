import { ReactNode } from "react";
import React,{ useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaBars } from 'react-icons/fa'

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  
const [bool, setBool] = useState('none')
const Lago = 'https://i.ibb.co/xJxBBbv/QF-Media-kit-ref.png'

 function Active() {
    setBool('flex')
    if(bool === 'flex') {
      setBool('none')
    }
  }

const translate = keyframes`
  from {
    transform: translateX(-80px);
  } to {
    transform: translateX(1px);
  } 
`

const Nav = styled.nav`
  height: 45px; 
  display: flex; 
  align-content: center; 
  justify-content: space-between; 
  padding: 0.2rem calc((100vw - 1000px) / 2); 
  z-index: 12; 
`


const BG = styled.div`
  margin-top: 0.7%; 
    @media screen and (max-width: 768px) { 
    display: none; 
  } 
`


const LG = styled.div`
  margin-top: 1.3%; 
  display: none;
  @media screen and (max-width: 768px) { 
    display: flex;
    margin-left: 20px;
  } 
`

  
const NavData = styled.a` 
  transform: translateX(300px);
  color: #000000; 
  font-size: large;
  display: flex; 
  align-items: center; 
  text-decoration: none; 
  padding: 0 1rem; 
  font-family: 'Poppins', sans-sherif;
  height: 100%; 
  cursor: pointer; 
  &.active { 
    color: #000000; 
  } @media screen and (max-width: 768px) { 
    font-size: 1.5rem; 
    cursor: pointer; 
  } 
`

const NavJot = styled.li` 
  color: #fff; 
  align-items: center; 
  padding: 0 1rem; 
  font-family: 'Poppins', sans-sherif;
  height: 100%; 
  cursor: pointer; 
  &.active { 
    color: #000000; 
  } @media screen and (max-width: 768px) { 
    font-size: 1.5rem; 
    cursor: pointer; 
 }
`


const Bars = styled(FaBars)` 
  display: none; 
  color: #fff; 
  @media screen and (max-width: 768px) { 
    display: block; 
    position: absolute; 
    top: 0; 
    right: 0;
    transform: translate(-100%, 75%); 
    font-size: 1.8rem; 
    cursor: pointer; 
  } 
`

 
const NavActive = styled.div` 
  display: none; 
  background-color: #0000;
  height: 100vh;
  @media screen and (max-width: 768px) { 
    animation: ${translate} 0.3s linear;
    display: ${bool}; 
    background-color: #0000;
    height: 20vh;
    flex-direction: column;
    margin-top: 30px; 
  } 
`

const NavMenu = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-right: -24px; 
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`

  function Link1() {
   window.open('https://bit.ly/chatgpt-whatsapp');
  }

  function Link2() {
   window.open('https://');
  }

  function Link3() {
   window.open('https://dsc.gg/turing');
  }

  function Contact() {
   window.open('https://');
  }
  
  return (
    <Nav> 
      <BG>
      <img alt='Logo' src={Lago} width='30'/>
      </BG>
      <NavData href='https://bit.ly/chatgpt-whatsapp'>Create Raffle</NavData> 
      <NavData href='https://t.me/'>Raffle Board</NavData>
      {children}
    </Nav>
  );
}