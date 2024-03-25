import AboutImage from "../assets/about.jpg"

const About = () =>  {
  return (
    <div>
      <div className="text-center  mt-10 rounded-lg">
        <h1 className="text-5xl font-bold text-[#131313]">About</h1>
      </div>

      <div className="mt-5 relative">
        <figure className="relative">
          <img
            src={AboutImage}
            className="w-full h-[500px] rounded-lg"
            alt=""
          />
        </figure>

        <div className="absolute -bottom-40 left-[50%] translate-x-[-50%] p-10 bg-white shadow-2xl rounded-lg">
          <div>
            <h2 className="text-3xl font-bold text-[#131313] mb-5">About Us</h2>
            <p>
              Welcome to Book Vibe, your go-to destination for book lovers! At
              Book Vibe, we are passionate about literature and fostering a
              community of avid readers.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-3xl font-bold text-[#131313] mb-5">
              Our Mission
            </h3>

            <p>
              Our mission is to connect book enthusiasts from all walks of life
              and provide them with a platform to discover new books, share
              their thoughts and recommendations, and engage in meaningful
              discussions about literature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About