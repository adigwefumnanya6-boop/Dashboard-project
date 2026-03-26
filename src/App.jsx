import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Categories from "./components/Categories";
import About from "./components/About";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("home");

  if (page === "login") return <Login onNavigate={setPage} />;
  if (page === "signup") return <SignUp onNavigate={setPage} />;
  if (page === "forgot") return <ForgotPassword onNavigate={setPage} />;
  if (page === "dashboard") return <Dashboard onNavigate={setPage} />;
  if (page.startsWith("course-")) {
    const id = page.split("course-")[1];
    return <CourseDetail id={id} onNavigate={setPage} />;
  }

  return (
    <div className="font-sans">
      <Navbar onNavigate={setPage} />
      <Hero onNavigate={setPage} />
      <Stats />
      <Features />
      <Categories />
      <About />
      <FeaturedCourses />
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
