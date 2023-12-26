
import { useContext } from 'react';
import './App.css';
import Register from './pages/Register';
import { LogInContext } from './contexts/LogInProvider';
import DashBoard from './pages/DashBoard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Toast from './components/Toast';
function App() {
  const {token,err}=useContext(LogInContext);
  const router=createBrowserRouter([
    {
      path:'/',
      element:<DashBoard></DashBoard>
    }
  ])
  return (
    <div className="App">
      {
        err?<Toast msg={err}></Toast>:<></>
      }
      {
        token?<RouterProvider router={router}></RouterProvider>:<Register></Register>
      }
    </div>
  );
}

export default App;
