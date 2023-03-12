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
  display: flex; 
  transform: translateY(-200px);
  align-content: center; 
  z-index: 12; 
`

const Row = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: row;
  align-items: center;
  display: flex; 
  align-content: center; 
  z-index: 12; 
`

const Typography = styled.h1`
  transform: translateY(30px);
  color: #000000;
  font-size: xx-large;
  font-family: 'Poppins';
`

const Typographo = styled.h1`
  font-size: initial;
  font-family: 'Poppins';
  font-weight: unset;
`

const Input = styled.input`
  border-radius: 10px;
  color: #000000;
  margin-top: 2%;
  display: flex;
  height: 5vh;
  font-family: 'Poppins';
`

const Button = styled.button`
  background: #edd8d8;
  border: none;
  margin-left: 10px;
    align-items: center;
  border-radius: 10px;
  color: #000000;
  margin-top: 2%;
  display: flex;
  font-family: 'Poppins';
  min-height: 37px;
`

function Mock() {
  return (
    <>
     <Flex>
       <OneContent>
       <Typography>Raffle Board</Typography>
       <Typographo>Choose the raffle you want to run.</Typographo>
       <Row>
       <Input/>
       <Button>Raffle ID</Button>
       </Row>
       </OneContent>
     </Flex>
    </>
  )
}

export default Mock