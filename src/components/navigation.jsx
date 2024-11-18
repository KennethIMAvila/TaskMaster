import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //Redirect to login page
    navigate("/");
  };
  return (
    <>
      <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/Account">Account</Link></li>
              <li><Link to="/Dashboard">Task List</Link></li>
              <li><Link to="/History">Task History</Link></li>
              <li><Link to="/Calendarview">Calendar View</Link></li>
            </ul>
          </nav>
          <img src="src/assets/Logout.png" alt="logout" onClick={handleLogout} className="logout-button" />
      </aside>
    </>
  )
}

export default Navigation
