const courses = [
  {
    title: "Information About UI/UX Design & Degree",
    instructor: "Nicole Brown",
    price: "$200",
    originalPrice: "$999",
    lessons: "12+",
    duration: "9hr 30min",
    rating: 4.0,
    reviews: 15,
    badge: null,
    bgColor: "bg-blue-100",
  },
  {
    title: "WordPress for Beginners - Master WordPress Quickly",
    instructor: "Jenis R",
    price: "$156",
    originalPrice: null,
    lessons: "11+",
    duration: "6hr 20min",
    rating: 5.0,
    reviews: 21,
    badge: null,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Sketch from A to Z (2022): Become an App Designer",
    instructor: "Jesse Stevens",
    price: "Free",
    originalPrice: null,
    lessons: "06+",
    duration: "5hr 10min",
    rating: 5.0,
    reviews: 12,
    badge: "Free",
    bgColor: "bg-green-100",
  },
  {
    title: "The Complete JavaScript Course: From Zero to Expert",
    instructor: "Nicole Brown",
    price: "$145",
    originalPrice: null,
    lessons: "08+",
    duration: "10hr 00min",
    rating: 4.5,
    reviews: 34,
    badge: null,
    bgColor: "bg-indigo-100",
  },
  {
    title: "HTML & CSS for Absolute Beginners",
    instructor: "Stella Johnson",
    price: "Free",
    originalPrice: null,
    lessons: "05+",
    duration: "3hr 45min",
    rating: 4.8,
    reviews: 19,
    badge: "Free",
    bgColor: "bg-pink-100",
  },
  {
    title: "Digital Marketing Masterclass 2024",
    instructor: "John Smith",
    price: "$200",
    originalPrice: "$990",
    lessons: "14+",
    duration: "12hr 00min",
    rating: 4.7,
    reviews: 28,
    badge: null,
    bgColor: "bg-orange-100",
  },
];

// Renders star icons based on rating
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-[#C89030]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FeaturedCourses() {
  return (
    <section className="bg-[#EEF0F6] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#C89030] text-sm font-semibold uppercase tracking-widest mb-1">
              What's New
            </p>
            <h2 className="text-[#0D1A2E] text-3xl font-bold">
              Featured Courses
            </h2>
          </div>
          <button className="bg-[#C89030] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#b07d28] transition-colors hidden md:block">
            View all Courses
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Course Thumbnail */}
              <div
                className={`relative ${course.bgColor} h-44 flex items-center justify-center`}
              >
                <span className="text-5xl opacity-30">📚</span>
                {/* Price Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#1A3A6E] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.price}
                  </span>
                  {course.originalPrice && (
                    <span className="text-gray-400 text-xs line-through ml-2">
                      {course.originalPrice}
                    </span>
                  )}
                </div>
                {course.badge === "Free" && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Free
                  </div>
                )}
              </div>

              {/* Course Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#EEF0F6] flex items-center justify-center text-xs font-bold text-[#1A3A6E]">
                    {course.instructor[0]}
                  </div>
                  <span className="text-gray-400 text-xs">
                    {course.instructor} · Instructor
                  </span>
                </div>

                <h3 className="text-[#0D1A2E] font-semibold text-sm leading-snug mb-4 line-clamp-2">
                  {course.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <span>📖 {course.lessons} Lessons</span>
                  <span>⏱ {course.duration}</span>
                </div>

                {/* Rating & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <StarRating rating={course.rating} />
                    <span className="text-[#0D1A2E] text-xs font-semibold ml-1">
                      {course.rating}
                    </span>
                    <span className="text-gray-400 text-xs">
                      ({course.reviews})
                    </span>
                  </div>
                  <button className="bg-[#1A3A6E] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#C89030] transition-colors duration-300">
                    {course.price === "Free" ? "Enroll" : "Buy Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="bg-[#C89030] text-white text-sm font-semibold px-6 py-2 rounded-lg">
            View all Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
