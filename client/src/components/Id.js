import logo from './avatar.png';
function Id() {
const card={
    position: "center",
    width : "400px",
    border:'5px solid black',
    margin :'auto',
    boxShadow : '2px 1px 2px black',
    color : 'blue',
    frontstyle: 'Serif',
    frontsize : 16
}
const ts ={
//  margin: '-0px',
 position: 'left',
 color: "black"
}
return (
    <div clasName="App" style={card}>
     <br></br>
     <center>
     <img src={logo} className="App-logo" alt="logo" />
     <h1>KL UNIVERSITY</h1>
     <h3>ID CARD:</h3>
     
     </center>
     <div style={ts}>
        <center>
        <p> Name:K.Rashmitha  </p>
        <p2> Branch: CSE(H) <br></br></p2>
        <p3> IdNumber:2200032886<br></br></p3>
        </center>
        </div>
        </div>
);

}
export default Id;