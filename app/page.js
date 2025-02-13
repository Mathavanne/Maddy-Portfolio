// page.js
'use client';  // Add this at the top of the file

import { useEffect, useState } from 'react';
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  return filtered;
}

export default function Home() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getData();
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      // {blogs && <Blog blogs={blogs} />}
      <Education />
      <ContactSection />
    </>
  );
}
