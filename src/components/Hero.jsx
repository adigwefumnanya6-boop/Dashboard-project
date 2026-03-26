import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-[#EEF0F6] to-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <p className="text-[#C89030] text-sm font-semibold uppercase tracking-widest mb-3">
            The Leader in Online Learning
          </p>
          <h1 className="text-[#0D1A2E] text-4xl md:text-5xl font-bold leading-tight mb-5">
            Engaging &amp; Accessible <br />
            <span className="text-[#1A3A6E]">Online Courses</span> For All
          </h1>
          <p className="text-gray-500 text-base mb-8 max-w-md">
            Our specialized online courses are designed to bring the classroom
            experience to you, no matter where you are.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-[#EEF0F6] rounded-xl px-4 py-3 max-w-md mb-8">
            <span className="text-lg mr-3">🔍</span>
            <input
              type="text"
              placeholder="Search for Courses, Instructors..."
              className="flex-1 bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400"
            />
            <button className="bg-[#C89030] text-white text-sm font-semibold px-4 py-2 rounded-lg ml-3 hover:bg-[#b07d28] transition-colors">
              Search
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="bg-[#1A3A6E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#C89030] transition-colors duration-300">
              Get Started
            </button>
            <button className="text-[#1A3A6E] font-semibold px-8 py-3 rounded-lg border border-[#1A3A6E] hover:bg-[#EEF0F6] transition-colors duration-300">
              Browse Courses
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[#0D1A2E] text-2xl font-bold">1000+</span>
              <p className="text-gray-400 text-xs">Courses Available</p>
            </div>
            <div className="w-px h-10 bg-[#EEF0F6]" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#C89030]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[#0D1A2E] font-bold ml-1">4.8</span>
              <span className="text-gray-400 text-sm ml-1">Rating</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#1A3A6E] rounded-3xl rotate-18" />
            <img
              src={heroImage}
              alt="Student learning"
              className="relative rounded-3xl w-96 md:w-[420px] h-[200px] md:h-[350px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
