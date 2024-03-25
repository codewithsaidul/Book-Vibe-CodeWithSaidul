import { Link } from "react-router-dom";
import BannerImage from "../assets/img.png"
function Banner() {
  return (
    <div className="hero bg-[#1313130D] mt-10 rounded-xl">
      <div className="hero-content py-20 flex-col gap-10 lg:flex-row-reverse">
        <figure>
          <img src={BannerImage} className="w-full" />
        </figure>
        <div className="text-center lg:text-left lg:px-32">
          <h1 className="text-4xl md:text-5xl text-[#131313] font-bold mb-20">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listed-books" className="py-3 px-6 bg-[#23BE0A] text-white rounded-lg text-xl font-bold">
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner