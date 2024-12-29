import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
export const dynamic = 'force-dynamic';

async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds (optional)
    });

    if (!res.ok) {
      console.error('Failed to fetch blog data:', res.statusText);
      return [];
    }

    const data = await res.json();

    return data
      .filter((item) => item?.cover_image)
      .sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}



export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </>
  )
};