import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { TbPageBreak } from "react-icons/tb";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ReadBooks = ({ readBook }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = readBook;

  return (
    <div className="border p-5 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-10">
        <figure className="lg:h-[300px] py-12 px-8 bg-[#1313130D]">
          <img src={image} className="h-full w-full" alt="book image" />
        </figure>

        <div>
          <h2 className="text-2xl text-[#131313] font-bold mb-4">{bookName}</h2>
          <h5 className="text-base text-#131313CC[#131313CC] font-medium mb-8">
            By: {author}
          </h5>

          <div className="flex flex-col sm:flex-row gap-5 lg:items-center mb-8">
            <div className="flex items-center">
              <h3 className="text-base text-[#131313] font-bold">Tag</h3>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="md:mr-5 text-base text-center font-medium text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-[30px]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex gap-x-2 items-center text-base text-[#131313CC] font-medium">
              <CiLocationOn size={20} />

              <h3>Year of Publishing: {yearOfPublishing}</h3>
            </div>
          </div>

          <div className="flex gap-x-10 border-b pb-5 mb-8">
            <h3 className="flex gap-x-2 items-center textbase text-[#13131399] font-normal">
              <FiUsers />
              Publisher: {publisher}
            </h3>

            <h3 className="flex gap-x-2 items-center textbase text-[#13131399] font-normal">
              <TbPageBreak />

              <span>
                Page <span className="ml-3">{totalPages}</span>
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
            <button className="py-3 px-5 bg-[#328EFF26] text-[#328EFF] rounded-[30px]">
              Category: {category}
            </button>
            <button className="py-3 px-5 bg-[#FFAC3326] text-[#FFAC33] rounded-[30px]">
              Rating: {rating}
            </button>

            <Link
              to={`/book/${bookId}`}
              className="py-3 px-7 bg-[#23BE0A] text-[#fff] rounded-[30px]"
            >
              View Details
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

ReadBooks.propTypes = {
  readBook: PropTypes.object,
  
};

export default ReadBooks;
