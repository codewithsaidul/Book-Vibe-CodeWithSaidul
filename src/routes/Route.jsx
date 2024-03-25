import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import PageToRead from "../pages/PageToRead"
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