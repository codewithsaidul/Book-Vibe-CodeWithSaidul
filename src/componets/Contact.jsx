import ConatactImage from '../assets/doodle.svg'


const Contact = () => {
  return (
    <div className="w-full max-w-[1170px]  mx-auto flex gap-10 justify-center items-center min-h-[calc(100vh-116px)]">
      {/* <div className="flex gap-10 w-[70%] p-8 bg-base-300 rounded-lg">
        <div className="w-full">
          <h2 className="text-center text-3xl font-bold mb-8 text-[#131313]">
            Get In Touch
          </h2>
          <form className="grid grid-cols-12 gap-5">
            <div className=" col-span-6">
              <label className="text-lg text-[#131313] font-semibold">
                Name :{" "}
              </label>
              <input
                className="w-full rounded-3xl border-0 outline-none py-2 px-5 text-[#13131380] text-base"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-1 col-span-6">
              <label className="text-lg text-[#131313] font-semibold">
                E-mail :{" "}
              </label>
              <input
                className="w-full  rounded-3xl border-0 outline-none py-2 px-5 text-[#13131380] text-base"
                type="email"
                placeholder="Your E-mail"
              />
            </div>
            <div className="flex flex-col gap-1 w-full col-span-12">
              <label className="text-lg text-[#131313] font-semibold">
                Message :{" "}
              </label>
              <textarea
                className="w-full rounded-3xl border-0 h-[300px] resize-none outline-none p-5 text-[#13131380] text-base"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button className="py-3 px-7 bg-[#23BE0A] text-white rounded-[30px] font-bold col-span-4">
              Send Message
            </button>
          </form>
        </div>
      </div> */}

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#131313]">
              Let&apos;s talk!
            </h2>
            <div className="text-[#131313CC] w-full lg:w-96">
              Have questions, feedback, or suggestions? We&apos;d love to hear
              from you!
            </div>
          </div>
          <img src={ConatactImage} alt="" className="py-6 pr-6 h-52 md:h-64" />
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-300 outline-none text-[#131313CC]"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-300 outline-none text-[#131313CC]"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-300 outline-none text-[#131313CC]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#23BE0A] text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
