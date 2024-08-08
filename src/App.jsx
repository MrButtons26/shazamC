import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppsPage from "./pages/AppsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/apps",
    element: <AppsPage />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
