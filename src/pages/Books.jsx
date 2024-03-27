import { useLoaderData } from "react-router-dom";
import BookCard from "../componets/BookCard";


function Books() {

    const books = useLoaderData();
    
  return (
    <div className="w-full max-w-[1170px]  mx-auto">
      <h2 className="text-5xl text-center font-bold text-[#131313] mt-20 mb-10">
        Books
      </h2>

      <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 mb-10">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
}

export default Books;
