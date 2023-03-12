import styled from 'styled-components'

const Flex = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
  display: flex; 
  align-content: center; 
  padding: 0.2rem calc((100vw - 1000px) / 2); 
  z-index: 12; 
`

const OneContent = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  height: -webkit-fill-available;
  display: flex; 
  transform: translateY(-200px);
  align-content: center; 
  z-index: 12; 
`

const Typography = styled.h1`
  transform: translateY(30px);
  color: #000000;
  font-size: xx-large;
  font-family: 'Poppins';
`

const Input = styled.input`
  border-radius: 10px;
  color: #000000;
  margin-top: 2%;
  height: 5%;
  font-family: 'Poppins';
`

function Mock() {
  return (
    <>
     <Flex>
       <OneContent>
       <Typography>Raffle Board</Typography>
       <Input/>
       </OneContent>
     </Flex>
    </>
  )
}

export default Mock