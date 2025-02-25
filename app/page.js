"use client";  // Make sure this runs on the client side

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
// import Blog from "./components/homepage/blog"; // Uncomment if needed

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // Ensure we are on the client side

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window === "undefined") return;
    setIsClient(true);

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
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (!isClient) return <p>Loading...</p>; // Prevents SSR issues

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
