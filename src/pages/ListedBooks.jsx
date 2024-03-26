
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReadBooks, getWishlist } from "../utility/localStorage";
import ReadBooks from "../componets/ReadBooks";
import Wishlist from "../componets/Wishlist";


function ListedBooks() {

  const [tabIndex, setTabIndex] = useState(0);

  const [readBooks, setReadBooks] = useState([]);

  const [displyReadBooks, setDisplayReadBooks] = useState([])

  const [wishLists, setWishList] = useState([])


  useEffect(() => {
    const storedReadBooks = getReadBooks();
    setReadBooks(storedReadBooks);
    setDisplayReadBooks(storedReadBooks);

    const storedWishList = getWishlist();
    setWishList(storedWishList);
  }, []);

  // Handle Filter books

  


  const handleFilterBooks = filter => {
    if (filter === 'rating') {
      const bookRating = readBooks.sort((a, b) => b.rating - a.rating)
      setDisplayReadBooks(bookRating);
    } else if (filter === 'pages') {
      const bookPages = readBooks.sort((a, b) => b.totalPages - a.totalPages);
      setDisplayReadBooks(bookPages);
    } else if (filter === "PublisherYear") {
      const bookPublisherYear = readBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setDisplayReadBooks(bookPublisherYear);
    }
  }




  return (
    <div className="w-full max-w-[1170px]  mx-auto">
      <div className="text-center py-9 px-20 bg-[#1313130D] my-7">
        <h2 className="text-3xl text-[#131313] font-bold">Books</h2>
      </div>

      <div>
        <div className="flex justify-center my-10">
          <details className="dropdown">
            <summary className="m-1 btn hover:bg-[#23BE0A] bg-[#23BE0A] text-white">
              Sort By <IoIosArrowDown size={24} />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleFilterBooks("rating")}>
                <a>Rating</a>
              </li>
              <li onClick={() => handleFilterBooks("pages")}>
                <a>Number of pages</a>
              </li>
              <li onClick={() => handleFilterBooks("PublisherYear")}>
                <a>Publisher year</a>
              </li>
            </ul>
          </details>
        </div>
        <div>
          <div className="flex items-center -mx-4 overflow-x-hidden  overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              className={`px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              }  dark:border-gray-600 dark:text-gray-600`}
            >
              <span>Read Books</span>
            </Link>

            <Link
              onClick={() => setTabIndex(1)}
              to={`wishlist`}
              className={` px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              }  dark:border-gray-600 dark:text-gray-600`}
            >
              <span>WishList Books</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-16 my-10">
          {tabIndex === 0 &&
            displyReadBooks.map((readBook) => (
              <ReadBooks
                key={readBook.bookId}
                readBook={readBook}
                // handleRemoveReadList={handleRemoveReadList}
              ></ReadBooks>
            ))}
        </div>

        <div className="flex flex-col gap-16 my-10">
          {tabIndex === 1 &&
            wishLists.map((wishList) => (
              <Wishlist
                key={wishList.bookId}
                wishList={wishList}
                // handleRemoveWishList={handleRemoveWishList}
              ></Wishlist>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ListedBooks;
