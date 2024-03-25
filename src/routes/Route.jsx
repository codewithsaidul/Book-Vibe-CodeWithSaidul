import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import PageToRead from "../pages/PageToRead"
import About from "../pages/About";
import BookDetails from "../pages/BookDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pagetoread",
        element: <PageToRead />,
      },
    ],
  },
]);

export default router