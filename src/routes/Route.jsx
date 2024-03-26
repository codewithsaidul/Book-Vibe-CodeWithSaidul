import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import ReadBooks from "../componets/ReadBooks";
import Wishlist from "../componets/Wishlist";
import PageToRead from "../pages/PageToRead"
import About from "../pages/About";
import BookDetails from "../pages/BookDetails";
import Contact from "../componets/Contact";
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