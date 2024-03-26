
// import PropTypes from 'prop-types'

import { useEffect, useState } from "react";
import { getReadBooks } from "../utility/localStorage";

const Wishlist = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = getReadBooks();
    setReadBooks(storedReadBooks);
  }, []);

  console.log(readBooks);
  return (
    <div>wish list gelo koi</div>
  )
}

Wishlist.propTypes = {}

export default Wishlist
