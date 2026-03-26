const categories = [
  { name: "Web Development", instructors: 40, icon: "🌐" },
  { name: "UI/UX Design", instructors: 25, icon: "🎨" },
  { name: "Data Science", instructors: 20, icon: "📊" },
  { name: "Mobile Development", instructors: 15, icon: "📱" },
  { name: "Cybersecurity", instructors: 18, icon: "🔐" },
  { name: "Cloud Computing", instructors: 12, icon: "☁️" },
  { name: "AI & Machine Learning", instructors: 30, icon: "🤖" },
  { name: "Digital Marketing", instructors: 22, icon: "📣" },
];

function Categories() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#C89030] text-sm font-semibold uppercase tracking-widest mb-1">
              Favourite Course
            </p>
            <h2 className="text-[#0D1A2E] text-3xl font-bold">Top Category</h2>
          </div>
          <button className="bg-[#C89030] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#b07d28] transition-colors hidden md:block">
            View all Categories
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#EEF0F6] rounded-2xl p-5 flex flex-col items-center text-center cursor-pointer hover:bg-[#1A3A6E] group transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl mb-3 shadow-sm group-hover:bg-[#C89030] transition-colors duration-300">
                {cat.icon}
              </div>
              <p className="text-[#0D1A2E] font-semibold text-sm group-hover:text-white transition-colors">
                {cat.name}
              </p>
              <p className="text-gray-400 text-xs mt-1 group-hover:text-[#EEF0F6] transition-colors">
                {cat.instructors} Instructors
              </p>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="bg-[#C89030] text-white text-sm font-semibold px-6 py-2 rounded-lg">
            View all Categories
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
