import { useLoaderData } from "react-router-dom";
import BookCard from "../componets/BookCard";
import { useState } from "react";


function Books() {

    const books = useLoaderData();


    const [dataLength, setDataLength] = useState(6);

    const handleShowBooks = () => {
      setDataLength(prevDataLength =>  prevDataLength + dataLength)
    }

  return (
    <div className="w-full max-w-[1170px]  mx-auto">
      <div className="text-center py-9 px-20 bg-[#1313130D] mt-7 mb-16">
        <h2 className="text-5xl text-[#131313] font-bold">Books</h2>
      </div>

      <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 mb-10">
        {books.slice(0, dataLength).map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>

      <div
        className={`flex justify-center my-5 ${
          dataLength > 24 ? "hidden" : ""
        }`}
      >
        <button
          onClick={handleShowBooks}
          className="py-3 px-7 bg-[#23BE0A] text-[#fff] rounded-[30px]"
        >
          See More
        </button>
      </div>
    </div>
  );
}

export default Books;
