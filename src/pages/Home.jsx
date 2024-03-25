// import { useLoaderData } from "react-router-dom";
import Banner from "../componets/Banner"
import Books from "./Books";
// import BookCard from "../componets/BookCard";
// import Books from "./Books"

function Home() {
  
  // const [books, setBooks] = useState([]);
  return (
    <div>
      <Banner />
      <Books />
    </div>
  );
}

export default Home