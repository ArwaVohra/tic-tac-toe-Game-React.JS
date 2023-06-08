import { Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';
// import Apps from './perfectByMe';
import { Link, NavLink } from 'react-router-dom';


function MainBody(id) {
  const [Player1,setPlayer1] = useState('X')
  const [Player2,setPlayer2] = useState('Y')



const onChangeDo1=(e)=>{
  setPlayer1(e.target.value)
}
const onChangeDo2=(e)=>{
  setPlayer2(e.target.value)
}
const clicked = (e) => {
   
  localStorage.setItem('1',Player1)
  localStorage.setItem('2',Player2)
  }


  return (
    <div className='Mainbody' >

      <h1 style={{ color: '#2979ff' }} >TIC-TAC-TOE</h1>
      <Container maxWidth="xs" sx={{ height: '25rem', boxShadow: '5px 5px 5px 3px #fff', borderRadius: '10px', backgroundColor: "#282c34" }} >
        
        <form onSubmit={clicked}>
          <Typography sx={{ pt: 4 }} variant='h4' align="center" color="common.white" >Player 1 :</Typography>
          <TextField
          onChange={onChangeDo1}
            id='Player1'
            align='center'
            sx={{  "& .MuiInputBase-root": {color: 'primary.main'},"& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "grey" } }, label: { color: 'whitesmoke' }, mt: 2, ml: 10, border: 'whitesmoke' }}
            label='Enter Name of 1st Player' ></TextField>

          <br /><br />

          <Typography align='center' variant='h4' color="common.white" >Player 2 :</Typography>
          <TextField
           onChange={onChangeDo2}
            id='Player2'
            color='secondary' align='center' sx={{ "& .MuiInputBase-root": {color: 'secondary.main'},"& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "grey" } }, label: { color: 'whiteSmoke' }, mt: 2, ml: 10 }} label='Enter Name of 2nd Player' ></TextField>
          <br />
          <center>
            <Link to='/SafeCode'  ><Button size="large" variant='contained' color='secondary' sx={{ mt: 6 }} onClick={()=>clicked(id)}  >Submit</Button></Link>
          </center>
        </form>
      </Container>

    </div>




  )
}

export default MainBody;