"use client"; 

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents SSR execution
    setIsClient(true);

    if (!personalData?.devUsername) {
      setError("Developer username is missing.");
      setLoading(false);
      return;
    }

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

  if (!isClient) return <p>Loading...</p>; 

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />

      {/* Blog Section */}
      <section>
        {loading && <p>Loading blogs...</p>}
        {error && <p>Error: {error}</p>}
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <img src={blog.cover_image} alt={blog.title} />
              <p>{blog.description}</p>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))
        ) : (
          !loading && <p>No blogs found.</p>
        )}
      </section>
    </>
  );
}
