import aboutImage from "../assets/about-image.jpg";

function About() {
  return (
    <section className="bg-[#EEF0F6] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#C89030] rounded-3xl rotate-3" />
            <img
              src={aboutImage}
              alt="Student studying"
              className="relative rounded-3xl w-80 md:w-[420px] h-[400px] md:h-[500px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <p className="text-[#C89030] text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-[#0D1A2E] text-3xl font-bold leading-tight mb-5">
            We Are on a Mission to Make{" "}
            <span className="text-[#1A3A6E]">Education Accessible</span> For
            Everyone
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            LearnHub is an online learning platform built to make quality
            education accessible to everyone, everywhere. We believe that
            learning should never be limited by location, schedule, or budget.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            We partner with expert instructors to bring you courses that are
            practical, affordable, and flexible — so you can learn at your own
            pace and on your own terms.
          </p>

          {/* Checkpoints */}
          <div className="flex flex-col gap-3 mb-8">
            {[
              "Industry-recognized certifications",
              "Learn from real-world experts",
              "Flexible learning schedules",
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C89030] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-[#0D1A2E] text-sm font-medium">{point}</p>
              </div>
            ))}
          </div>

          <button className="bg-[#1A3A6E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#C89030] transition-colors duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
