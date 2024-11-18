import { Link } from 'react-router-dom';
import { useState } from 'react'
import '../index.css';

const Signinup = () => {
  const [username, setUsername] = useState('');
  const [emailup, setEmailup] = useState('');
  const [passwordup, setPasswordup] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [emailin, setEmailin] = useState('');
  const [passwordin, setPasswordin] = useState('');

  const inputSignupChecker = () => {
    emailin.includes('@') && passwordup.length >= 8 && passwordup === confirmpassword; 
  }

  const handleSignup = () => { 
      if (!inputSignupChecker()) {
        alert.alert('Invalid email or password');
        return;
      }
      {/* Add your signup logic here */}
  }

  {/*const handleSignin = () => {
      Add your signin logic here
  }*/}
  
  

  
  return (
    <>
      <header className="signinup-header">
        <img className="logo" src="src/assets/WhiteTMlogo.png" alt="Logo"/>
        <h1 className="welcome-title">Task Master</h1>
      </header>
      <div className='body-signinup'>
        <div className="flexdirection">
            <div className="signupform">
                <h2>Sign Up</h2>
                <p className="labels">Username</p>
                <input className="inputs" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <p className="labels">Email</p>
                <input className="inputs" type="text" value={emailup} onChange={e => setEmailup(e.target.value)}/>
                <p className="labels">Password</p>
                <input className="inputs" type="text" value={passwordup} onChange={e => setPasswordup(e.target.value)}/>
                <p className="labels">Confirm Password</p>
                <input className="inputs" type="text" value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)}/>
                <button className='signupbut' onClick={handleSignup}>
                    <p>Sign Up</p>
                </button>
                <p className='signin'>Already have an account?<p className='signinlink'>Sign In</p></p>
            </div>
            <div className="welcomedesign">
                <h1>Your personal productivity <br/>companion.</h1>
                <img src="src/assets/Task Master.png" alt="welcomedesign" />
            </div>
            <div className="signinform">
            <h2>Sign In</h2>
                <p className="labels">Email</p>
                <input className="inputs" type="text" value={emailin} onChange={e => setEmailin(e.target.value)}/>
                <p className="labels">Password</p>
                <input className="inputs" type="text" value={passwordin} onChange={e => setPasswordin(e.target.value)}/>
                <button className='signinbut'>
                  <Link to="/Dashboard"><p>Log In</p></Link>
                </button>
                <div className="flex">
                  <hr style={{backgroundColorColor: "#b0b0b0", width: "25%", margin: "auto"}}/>
                  <p style={{textAlign: "center", color: "#b0b0b0"}}>or sign in with</p>
                  <hr style={{backgroundColorColor: "#b0b0b0", width: "25%", margin: "auto"}}/>
                </div>
                <button className='gogbut'>
                    <p>Log In</p>
                </button>
                <button className='gitbut'>
                    <p>Log In</p>
                </button>
                <p className='signup'><a href="#">Create New Account</a></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signinup
