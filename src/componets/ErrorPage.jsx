
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/error.png'

const ErrorPage = () => {
  return (
    <div className="w-full max-w-[1170px] reletive mx-auto">
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
        <figure className="mt-8">
          <img src={ErrorImage} alt="error image" />
        </figure>

        <h2 className="text-3xl font-bold mt-8 mb-3 text-[#131313]">
          Something went wrong.
        </h2>
        <p className="text-lg text-[#131313CC] font-normal mb-7">
          Sorry, We can’t find the page you’re looking for.
        </p>
        <Link
          to="/"
          className="py-3 px-20 font-bold bg-gradient-to-r from-[#D6E6FF] via-[#007DFE] text-white text-lg rounded-3xl"
        >
          Go Back
        </Link>
      </div>

      <div className="w-96 h-96 absolute overflow-x-hidden -left-60 top-36 rounded-full  bg-gradient-to-r from-[#D6E6FF] via-[#007DFE]"></div>
    </div>
  );
}

export default ErrorPage