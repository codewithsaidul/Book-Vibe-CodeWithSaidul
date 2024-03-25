import PropTypes from 'prop-types'
import { CiStar } from "react-icons/ci";

const BookCard = ({book}) => {
  console.log(book)
  return (
    <div className="card border">
      <figure className="p-5 m-5 rounded-lg bg-[#F3F3F3]">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="book"
          className="rounded-xl"
        />
      </figure>

      <div className="py-3 px-5">
        <div className="flex gap-3 mb-5">
          <h3 className="text-base font-medium text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-[30px]">
            Young Adult
          </h3>
          <h3 className="text-base font-medium text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-[30px]">
            Identity
          </h3>
        </div>

        <h2 className="text-2xl text-[#131313] font-bold mb-3">
          The Catcher in the Rye
        </h2>
        <h4 className="text-base font-medium text-[#131313CC]">
          By : Awlad Hossain
        </h4>
        <div className="flex justify-between items-center border-t border-[#13131326] pt-5 mt-5 border-dashed">
          <h5 className="text-base font-medium text-[#131313CC]">Fiction</h5>
          <h5 className="text-base flex items-center font-medium text-[#131313CC]">
            5.00 <CiStar size={20} className='ml-1' />
          </h5>
        </div>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object
}

export default BookCard
