import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/learnhub-logo.png";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load course.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EEF0F6] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#1A3A6E] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-[#EEF0F6] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error || "Course not found."}</p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#1A3A6E] text-white px-6 py-2 rounded-lg hover:bg-[#C89030] transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const stars = Math.round(course.rating?.rate || 0);

  return (
    <div className="min-h-screen bg-[#EEF0F6]">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <img src={logo} alt="LearnHub" className="w-8 h-8 object-contain" />
          <span className="text-[#0D1A2E] font-bold text-xl tracking-tight">
            LearnHub
          </span>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="text-[#1A3A6E] text-sm font-medium hover:underline"
        >
          ← Back to Dashboard
        </button>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Image */}
            <div className="bg-[#EEF0F6] md:w-80 h-64 md:h-auto flex items-center justify-center p-10 flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col gap-4">
              {/* Category */}
              <span className="text-[#C89030] text-xs font-semibold uppercase tracking-widest">
                {course.category}
              </span>

              {/* Title */}
              <h1 className="text-[#0D1A2E] text-2xl font-bold leading-snug">
                {course.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className={
                        s <= stars ? "text-[#C89030]" : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  {course.rating?.rate} ({course.rating?.count} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-[#1A3A6E] text-3xl font-bold">
                ${course.price}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {course.description}
              </p>

              {/* Actions */}
              <div className="flex gap-3 mt-2">
                <button className="bg-[#1A3A6E] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C89030] transition-colors duration-300">
                  Enroll Now
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="border border-[#1A3A6E] text-[#1A3A6E] font-semibold px-6 py-3 rounded-xl hover:bg-[#EEF0F6] transition-colors duration-300"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseDetail;
