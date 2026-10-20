import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Skills } from "@/components/sections/Skills";
import { Beyond } from "@/components/sections/Beyond";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/content/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    sameAs: [site.linkedin],
    description: site.description,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Method />
      <About />
      <Work />
      <Projects />
      <Awards />
      <Skills />
      <Beyond />
      <Contact />
    </>
  );
}
