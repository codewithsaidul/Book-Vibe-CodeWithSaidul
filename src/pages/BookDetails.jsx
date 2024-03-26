// import PropTypes from 'prop-types'
import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks, saveWishlist } from "../utility/localStorage";


const BookDetails = () => {
  const books = useLoaderData();

  const { bookId } = useParams();

  const bookIdInt = parseInt(bookId);

  const book = books.find((book) => book.bookId === bookIdInt);


  const handleBooks = (book) => {
    saveReadBooks(book);
  };

  const handleWishList = book => {
    saveWishlist(book)
  }


  return (
    <div className="w-full max-w-[1170px]  mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-14 mt-10 px-4">
        <div className="p-20 bg-[#1313130D] rounded-2xl w-full lg:w-1/2">
          {/* Image of Book */}
          <figure className="h-[500px]">
            <img src={book.image} className="h-full" alt="book image" />
          </figure>
        </div>

        {/* Details of Book */}
        <div className="w-full lg:w-1/2">
          {/* Bookname & Author Name */}
          <div className="border-b border-[#13131326] pb-5">
            <h2 className="text-4xl font-bold text-[#131313] mb-3">
              {book.bookName}
            </h2>
            <h4 className="text-xl font-medium text-[#131313CC]">
              By : {book.author}
            </h4>
          </div>

          {/* Category of book */}
          <div className="border-b border-[#13131326] pb-5 my-5">
            <p className="text-xl font-medium text-[#131313CC]">
              {book.category}
            </p>
          </div>

          {/* Review of book */}
          <div className="border-b border-[#13131326] pb-5">
            <p className="font-normal text-[#131313B2]">
              <span className="text-[#131313] text-base font-bold mr-2">
                Review :
              </span>
              {book.review}
            </p>

            <div className="flex gap-x-5 mt-10">
              <h4 className="text-base text-[#131313] font-bold">Tag</h4>

              <div>
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-5 text-base text-center font-medium text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-[30px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other Info of book */}

          <div className="mt-5 space-y-3">
            <h3 className="text-base text-[#131313B2] font-normal flex gap-24">
              Number of Pages:
              <span className="text-[#131313] font-semibold ">
                {book.totalPages}
              </span>
            </h3>
            <h3 className="text-base text-[#131313B2] font-normal flex gap-40">
              Publisher:
              <span className="text-[#131313] font-semibold">
                {book.publisher}
              </span>
            </h3>
            <h3 className="text-base text-[#131313B2] font-normal flex gap-24">
              Year of Publishing:
              <span className="text-[#131313] font-semibold">
                {book.yearOfPublishing}
              </span>
            </h3>
            <h3 className="text-base text-[#131313B2] font-normal flex gap-44">
              Rating:
              <span className="text-[#131313] font-semibold">
                {book.rating}
              </span>
            </h3>
          </div>

          {/* Button for Add Read or Wishlist Book */}
          <div className="flex gap-5 mt-8">
            <button
              onClick={() => handleBooks(book)}
              className="border border-[#1313134D] py-3 px-7 rounded-lg text-lg bg-transparent  text-[#131313] font-bold hover:text-[#fff] hover:border-[#50B1C9] hover:bg-[#50B1C9]  transition duration-700"
            >
              Read
            </button>

            <button
              onClick={() => handleWishList(book)}
              className="py-3 px-7 rounded-lg text-lg text-[#fff] border border-[#50B1C9] bg-[#50B1C9] font-bold hover:text-[#131313] hover:border-[#1313134D] hover:bg-transparent transition duration-700"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
