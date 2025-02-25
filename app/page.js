"use client";  // Ensure this runs on the client-side only

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
// import Blog from "./components/homepage/blog"; // Uncomment if you have a Blog component

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null); // Handle errors properly
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        const filtered = data
          .filter((item) => item?.cover_image)
          .sort(() => Math.random() - 0.5);

        setBlogs(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      
      {/* Blog Section */}
      {loading && <p>Loading blogs...</p>}
      {error && <p>Error fetching blogs: {error}</p>}
      {/* {blogs && <Blog blogs={blogs} />} */}

      <Education />
      <ContactSection />
    </>
  );
}
