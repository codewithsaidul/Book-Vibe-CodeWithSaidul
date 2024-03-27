import { Link, useLoaderData } from "react-router-dom";
import Banner from "../componets/Banner"
import BookCard from "../componets/BookCard";


function Home() {
  const books = useLoaderData();
  // const [books, setBooks] = useState([]);
  return (
    <div className="w-full max-w-[1170px]  mx-auto">
      <Banner />
      <div>
        <h2 className="text-5xl text-center font-bold text-[#131313] mt-20 mb-10">
          Books
        </h2>

        <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 mb-10">
          {books.slice(0, 6).map((book) => (
            <BookCard key={book.bookId} book={book}></BookCard>
          ))}
        </div>

        <div className="flex justify-center my-5">
          <Link
            to="/books"
            className="py-3 px-7 bg-[#23BE0A] text-[#fff] rounded-[30px]"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home