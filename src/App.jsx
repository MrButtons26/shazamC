import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppsPage from "./pages/AppsPage";
import ChartsPage from "./pages/ChartsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/apps",
    element: <AppsPage />,
  },
  {
    path: "/charts",
    element: <ChartsPage />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
