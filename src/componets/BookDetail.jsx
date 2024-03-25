
import PropTypes from 'prop-types'

const BookDetail = ({book}) => {
    console.log(book.bookId)
  return (
    <div>BookDetail</div>
  )
}

BookDetail.propTypes = {
    book: PropTypes.object
}

export default BookDetail
