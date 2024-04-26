import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useState } from 'react';
import  Landing  from "./Landing";

function Login() {


  const [login, setLogin] = useState(null);
  const [un,setUn] = useState(null);
  const [pw,setPw] = useState(null);
  const handleForm = (event) => {
    alert("form submitted");
    event.preventDefault();
    const data = new FormData (event.currentTarget);
     setUn ( data.get("un"));
     setPw ( data.get("pw"));
    axios.get('http://localhost:9099/check',{params:{
      un: data.get("Un"),
      pw: data.get("Pw")
    }})
    .then((res)=>{
      console.log(res.data)
      setLogin(res.data)
    })
  }

  if(login === null || login === 'FAIL')
  {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100' >
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '3rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              
              <form onSubmit={handleForm}>
                User Name: <input type="text" placeholder='un' name="un"/>
                <br/>
                Password: <input type="password" placeholder='pw' name="pw"/>
                <br/><br/>
                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <input type="submit" value="Login" />
              </form>
              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="/reg" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}
else{
  return(
    <div>
      <Landing/>
    </div>
  );
}
}

export default Login;