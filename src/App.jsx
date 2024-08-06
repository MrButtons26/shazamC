import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;