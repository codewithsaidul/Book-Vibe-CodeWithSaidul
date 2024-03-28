import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import ReadBooks from "../componets/ReadBooks";
import Wishlist from "../componets/Wishlist";
import PageToRead from "../pages/PageToRead"
import BookDetails from "../pages/BookDetails";
import Contact from "../componets/Contact";
import ErrorPage from "../componets/ErrorPage";
import Books from "../pages/Books";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/books",
        element: <Books />,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },

      {
        path: "/pagetoread",
        element: <PageToRead />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router