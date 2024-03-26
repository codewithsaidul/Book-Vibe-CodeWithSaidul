
const Contact = () => {
  return (
    <div className="w-full max-w-[1170px]  mx-auto flex gap-10 justify-center items-center min-h-[calc(100vh-116px)]">
      <div className="flex gap-10 w-[70%] p-8 bg-base-300 rounded-lg">
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
      </div>
    </div>
  );
};

export default Contact;
