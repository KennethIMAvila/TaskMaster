import { Link } from 'react-router-dom';
import '../index.css';

const Welcome = () => {
  return (
    <>
      <header className="welcome-header">
        <img className="logo" src="src/assets/WhiteTMlogo.png" alt="Logo"/>
        <h1 className="welcome-title">Task Master</h1>
        <button className="aboutus" onClick={() => {window.location.href = "./aboutus.jsx"}}>
          About Us
        </button>
      </header>
      <div className='body'>
        <h2>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Ab voluptatibus sequi, <br />laudantium cumque necessitatibus ad <br />similique asperiores vero, eligendi illo nihil, <br />officiis neque beatae molestiae minus optio <br />earum atque ipsam. </h2>
        <button><Link to="/Signinup" className="Link"><p>Get Started</p></Link></button>
      </div>
    </>
  )
}

export default Welcome
