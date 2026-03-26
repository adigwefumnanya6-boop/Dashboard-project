const features = [
  {
    icon: "🎓",
    title: "Learn at Your Own Pace",
    description:
      "Access all course materials anytime, anywhere. Study on your schedule with lifetime access to content.",
  },
  {
    icon: "📱",
    title: "Learn on Any Device",
    description:
      "Seamlessly switch between mobile, tablet, and desktop. Your progress syncs automatically across all devices.",
  },
  {
    icon: "🏆",
    title: "Get Certified",
    description:
      "Earn industry-recognized certificates upon completion. Showcase your skills to employers worldwide.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Instructors",
    description:
      "Learn from professionals with real-world experience. Our instructors are handpicked for quality and expertise.",
  },
];

function Features() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C89030] text-3xl font-bold tracking-widest mb-4">
            KEY FEATURES
          </p>
          <h2 className="text-[#0D1A2E] text-3xl font-bold">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-400 text-base mt-3 max-w-xl mx-auto">
            We provide all the tools and resources you need to learn, grow, and
            achieve your goals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#EEF0F6] rounded-2xl p-6 flex flex-col items-start hover:bg-[#1A3A6E] group transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:bg-[#C89030] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-[#0D1A2E] font-bold text-base mb-2 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-[#EEF0F6] transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
