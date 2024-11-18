import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";
import Welcome from "./pages/welcome";
import Signinup from "./pages/signinup";
import Mainlayout from "./layout/Mainlayout";
import Dashboard from "./pages/dashboard";
import History from "./components/history";
import Calendarview from "./components/calendarview"; 
import Account from "./components/account";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route>
      <Route index element={<Welcome/>}/>
        <Route path='/Signinup' element={<Signinup/>}/>
      <Route path="/" element={<Mainlayout/>}>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/History" element={<History/>}/>
        <Route path="/Calendarview" element={<Calendarview/>}/>
      </Route>
    </Route>
  )
);  


const App = () => {
  return <RouterProvider router={router}/>
}

export default App
