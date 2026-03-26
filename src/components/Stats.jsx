const stats = [
  { value: "10K+", label: "Online Courses" },
  { value: "86+", label: "Expert Tutors" },
  { value: "2K+", label: "Certified Courses" },
  { value: "25K+", label: "Online Students" },
];

function Stats() {
  return (
    <section className="bg-[#EEF0F6] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 shadow-sm"
          >
            {/* Icon placeholder */}
            <div className="w-10 h-10 rounded-full bg-[#EEF0F6] flex items-center justify-center shrink-0">
              <div className="w-4 h-4 rounded-full bg-[#1A3A6E]" />
            </div>
            <div>
              <p className="text-[#0D1A2E] text-xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
