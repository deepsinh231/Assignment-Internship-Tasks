import './App.css';
import { createBrowserRouter } from "react-router-dom";
import Blocks from './Components/Blocks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blocks />,
  },
]);


export default router;
