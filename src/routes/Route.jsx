import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import PageToRead from "../pages/PageToRead"
import About from "../pages/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/listed-books',
        element: <ListedBooks/>
      },
      {
        path: '/pagetoread',
        element: <PageToRead/>
      }
    ]
  },
]);

export default router