import { useState, useEffect } from "react";
import logo from "../assets/learnhub-logo.png";

function Dashboard({ onNavigate }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "courses", label: "Courses", icon: "📚" },
  ];

  return (
    <div className="min-h-screen bg-[#EEF0F6] flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#1A3A6E] flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <div className="w-12 h-12 bg-[#C89030] rounded-2xl flex items-center justify-center">
            <img src={logo} alt="LearnHub" className="w-7 h-7 object-contain" />
          </div>
          <span className="text-white font-bold text-lg">LearnHub</span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors w-full text-left ${
                activeNav === item.id
                  ? "bg-[#C89030] text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 py-6 border-t border-white/10">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors w-full text-left"
          >
            <span>🚪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
          <button
            className="md:hidden text-[#0D1A2E]"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-[#EEF0F6] rounded-xl px-4 py-2 w-64 hidden md:flex">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400 w-full"
            />
          </div>

          {/* User Info */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="text-right hidden sm:block">
              <p className="text-[#0D1A2E] text-sm font-semibold">John Doe</p>
              <p className="text-gray-400 text-xs">Student</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1A3A6E] flex items-center justify-center text-white font-bold text-sm">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {/* Welcome Banner */}
          <div className="bg-[#1A3A6E] rounded-2xl p-6 mb-8 flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-40 h-40 rounded-full bg-[#C89030]/20" />
            <div className="relative z-10">
              <p className="text-[#C89030] text-sm font-semibold mb-1">
                {new Date().toDateString()}
              </p>
              <h1 className="text-white text-2xl md:text-3xl font-bold mb-1">
                Welcome back, John! 👋
              </h1>
              <p className="text-white/60 text-sm">
                Always stay updated with your courses
              </p>
            </div>
            <div className="text-6xl relative z-10 hidden sm:block">🎓</div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Enrolled Courses", value: "12", icon: "📚" },
              { label: "Completed", value: "5", icon: "✅" },
              { label: "In Progress", value: "4", icon: "⏳" },
              { label: "Certificates", value: "3", icon: "🏆" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-[#0D1A2E] text-xl font-bold">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Courses Section */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[#0D1A2E] text-xl font-bold">All Courses</h2>
            <span className="text-[#C89030] text-sm font-semibold">
              {courses.length} courses
            </span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-[#1A3A6E] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => onNavigate(`course-${course.id}`)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
                >
                  {/* Course Image */}
                  <div className="bg-[#EEF0F6] h-40 flex items-center justify-center p-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Course Info */}
                  <div className="p-4">
                    <span className="text-[#C89030] text-xs font-semibold uppercase tracking-widest">
                      {course.category}
                    </span>
                    <h3 className="text-[#0D1A2E] text-sm font-semibold mt-1 mb-3 line-clamp-2 leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[#1A3A6E] font-bold text-base">
                        ${course.price}
                      </span>
                      <button className="bg-[#1A3A6E] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#C89030] transition-colors duration-300">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
