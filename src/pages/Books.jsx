import { useEffect, useState } from "react"
import BookCard from "../componets/BookCard";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);

    // console.log(books)
  return (
    <div>
      <h2 className="text-5xl text-center font-bold text-[#131313] mt-20 mb-10">Books</h2> 


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {
                books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
            }
      </div>
    </div>
  );
}

export default Books