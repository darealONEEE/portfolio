import { useState, useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import SocialLinks from "@/components/SocialLinks";
import ProjectModal from "@/components/ProjectModal";
import { designProjects, developProjects, multimediaProjects, type Project } from "@/data/projects";
import cvPdf from "@/imports/CV_-_DARYL_BO.pdf";
import ScrollDown1 from "@/imports/ScrollDown/index";
import Achievements1 from "@/imports/Achievements1/index";
import Achievements2 from "@/imports/Achievements2/index";
import Achievements3 from "@/imports/Achievements3/index";
import Group26 from "@/imports/Group26/index";
import Group27 from "@/imports/Group27/index";
import Group271 from "@/imports/Group27-1/index";
import Group272 from "@/imports/Group27-2/index";
import svgPaths from "@/imports/Overall/svg-l2at3kw3qv";
import servicesSvg from "@/imports/ServicesIcon/svg-4ovmw8q218";
import portfolioSvg from "@/imports/Portfolio/svg-jzldnlquad";
import imgPics1 from "@/imports/Overall/6a87301f7abfa1072689e561b8acc4514b486af1.png";
import imgRectangle20 from "@/imports/Portfolio-1/ffdc2ed176ba73021cacbfa5f3dc43ab454b978b.png";
import imgRectangle21 from "@/imports/Portfolio-1/f0d0802b14bbd438b97bb800109e41559ae74a73.png";
import imgRectangle22 from "@/imports/Portfolio-1/1846e9b576b1a7f910101233db383075696e229b.png";

type ProjectTab = "DESIGN" | "DEVELOP" | "MULTIMEDIA";

const projectPanels = [designProjects, developProjects, multimediaProjects];

function scrollToSection(section: HTMLElement | null | undefined) {
  section?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <div className={className || "h-[52px] w-[63px]"}>
      <svg className="block size-full" fill="none" viewBox="0 0 63 52.3959">
        <g>
          <path d={svgPaths.p39fc8400} fill="#1B1B1B" />
          <path d={svgPaths.p2f623080} fill="#7B7B7B" />
          <path d={svgPaths.p1583ce00} fill="#7B7B7B" />
          <path d={svgPaths.pe718300} fill="#7B7B7B" />
          <ellipse cx="42.199" cy="29.5415" fill="#1B1B1B" rx="9.87043" ry="9.47559" />
        </g>
      </svg>
    </div>
  );
}

function LogoIconLight({ className }: { className?: string }) {
  return (
    <div className={className || "h-[52px] w-[63px]"}>
      <svg className="block size-full" fill="none" viewBox="0 0 63 52.3959">
        <g>
          <path d={svgPaths.p39fc8400} fill="#7B7B7B" />
          <path d={svgPaths.p2f623080} fill="#dedede" />
          <path d={svgPaths.p1583ce00} fill="#dedede" />
          <path d={svgPaths.pe718300} fill="#dedede" />
          <ellipse cx="42.199" cy="29.5415" fill="#7B7B7B" rx="9.87043" ry="9.47559" />
        </g>
      </svg>
    </div>
  );
}

function Nav({ dark = false, onNavClick }: { dark?: boolean; onNavClick?: (section: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const textColor = dark ? "text-white" : "text-black";
  const links = ["About Me", "Services", "Projects", "Portfolio"];
  return (
    <nav
      className="relative flex items-center justify-between py-5 w-full"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="flex items-center gap-6 lg:gap-8">
        {dark ? <LogoIconLight className="h-10 w-12 shrink-0" /> : <LogoIcon className="h-10 w-12 shrink-0" />}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavClick?.(link)}
              className={`nav-link text-[15px] font-normal ${textColor} whitespace-nowrap cursor-pointer`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          download="CV_-_DARYL_BO.pdf"
          className={`motion-button hidden md:flex items-center gap-2 py-3 rounded-full text-[15px] font-light ${dark ? "bg-[#333] text-white hover:bg-[#444]" : "bg-[#e9e9e9] text-black hover:bg-[#dedede]"}`}
          style={{ paddingLeft: 70, paddingRight: 70, paddingTop: 12, paddingBottom: 12 }}
        >
          <span>CV</span>
          <div className="button-icon w-5 h-5 rounded-full bg-[#222] flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 13.2929 15.5623" fill="none">
              <path d={svgPaths.p364ef080} fill="#DEDEDE" />
            </svg>
          </div>
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="menu-toggle md:hidden flex flex-col justify-center gap-1 cursor-pointer p-2 -mr-2 min-h-11 min-w-11"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 ${dark ? "bg-white" : "bg-black"}`} />
          <span className={`block w-6 h-0.5 ${dark ? "bg-white" : "bg-black"}`} />
          <span className={`block w-4 h-0.5 ${dark ? "bg-white" : "bg-black"}`} />
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="mobile-navigation absolute left-0 right-0 top-full z-50 rounded-2xl bg-white p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => {
                  onNavClick?.(link);
                  setMenuOpen(false);
                }}
                className="mobile-nav-link rounded-lg px-3 py-3 text-left text-[15px] hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {link}
              </button>
            ))}
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_-_DARYL_BO.pdf"
              className="motion-button mt-2 flex items-center justify-between rounded-lg bg-[#e9e9e9] px-3 py-3 text-[15px] hover:bg-[#dedede]"
            >
              <span>Download CV</span>
              <span className="button-icon inline-block" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection({ refs }: { refs: Record<string, React.RefObject<HTMLElement | null>> }) {
  const handleScrollDown = () => {
    scrollToSection(refs["About Me"]?.current);
  };

  return (
    <section className="relative bg-white overflow-hidden min-h-[600px] lg:min-h-screen">
      {/* Decorative circles top-right */}
      <div className="hero-art hidden md:block absolute right-0 top-0 w-[42%] h-[68%] pointer-events-none lg:w-[55%] lg:h-full">
        <div className="absolute inset-0">
          <svg className="absolute block" style={{ width: "110%", height: "110%", left: "5%", top: "-5%" }} fill="none" viewBox="0 0 803.001 667.839" preserveAspectRatio="xMidYMid meet">
            <g>
              <path d={svgPaths.p3717a9f0} fill="#7B7B7B" />
              <path d={svgPaths.p37c9580} fill="#1B1B1B" />
              <path d={svgPaths.p29eb9180} fill="#1B1B1B" />
              <path d={svgPaths.pb48dff2} fill="#1B1B1B" />
              <ellipse cx="537.869" cy="376.537" fill="#7B7B7B" rx="125.809" ry="120.776" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img src={imgPics1} alt="Daryl Bo" className="absolute bottom-0 right-0 h-[72%] w-[78%] object-contain object-bottom lg:h-[88%]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:pr-10 lg:px-0 lg:pl-[8%] lg:pr-10 pt-4 pb-16 lg:pb-0 lg:min-h-screen flex flex-col">
        <Nav onNavClick={(s) => {
          scrollToSection(refs[s]?.current);
        }} />

        {/* Stats */}
        <div className="flex gap-8 mt-8 lg:mt-16">
          <div className="flex flex-col">
            <span className="text-[48px] lg:text-[72px] font-normal leading-none">10<span className="text-[30px] lg:text-[40px] align-top">+</span></span>
            <span className="text-[14px] lg:text-[18px] font-normal">Project Completed</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[48px] lg:text-[72px] font-normal leading-none">3<span className="text-[30px] lg:text-[40px] align-top">+</span></span>
            <span className="text-[14px] lg:text-[18px] font-normal">Years of Experience</span>
          </div>
        </div>

        {/* Hola */}
        <div className="hero-intro mt-4 lg:mt-8">
          <h1 className="text-[80px] sm:text-[120px] lg:text-[180px] xl:text-[200px] font-light leading-none tracking-tight">Hola!</h1>
          <p className="text-[14px] lg:text-[15px] font-light mt-2">It's Daryl Bo a Programmer</p>
        </div>

        {/* Mobile portrait */}
        {/* The portrait is intentionally hidden on phones; tablets use the compact panel above. */}

        {/* Scroll down */}
        <button onClick={handleScrollDown} className="motion-button scroll-button hero-scroll mt-8 lg:mt-auto lg:mb-16 self-start cursor-pointer rounded-full w-[200px] h-[60px]">
          <ScrollDown1 />
        </button>
      </div>
    </section>
  );
}

function AboutMeSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative bg-[#d6d6d6] overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          <div data-reveal className="lg:w-[38%] shrink-0">
            <h2 className="text-[64px] sm:text-[80px] lg:text-[100px] xl:text-[128px] font-normal leading-none">About Me</h2>
            <p className="text-[22px] lg:text-[32px] xl:text-[40px] font-light mt-4 leading-snug">A Passionate Crafter of Masterpieces.</p>
          </div>
          <div data-reveal className="lg:flex-1 mt-6 lg:mt-0 flex items-start">
            <p className="text-[15px] lg:text-[17px] xl:text-[18px] font-light leading-relaxed text-justify pt-[121px] pb-[121px] px-0">
              I specialize in web design and front-end development, crafting visually appealing and intuitive digital experiences. Beyond creating beautiful user interfaces, I also have strong capabilities in back-end coding. This versatile skill set allows me to build and deliver complete, end-to-end web solutions.
            </p>
          </div>
        </div>

        {/* Divider above Education */}
        <div className="h-px bg-black/20 mt-10 lg:mt-14" />

        {/* Education */}
        <div className="mt-10 mb-0 flex flex-col lg:flex-row lg:gap-16 xl:gap-24 py-0 -mx-[6px]"><div className="hidden lg:block lg:w-[38%] shrink-0" /><div className="flex-1">
          <h3 data-reveal className="text-[18px] lg:text-[20px] font-normal mb-6">Education &amp; Skills</h3>

          {/* Timeline line with dots */}
          <div className="relative mb-6">
            <div className="h-px bg-black/30 w-full" />
            <div className="absolute inset-0 grid grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#222] -mt-[5px]" />
                </div>
              ))}
            </div>
          </div>

          {/* 3-column entries */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                period: "2023 - 2027",
                title: "Bachelor Degree of Information Technology",
                school: "University of Nueva Caceres",
                desc: "As a BSIT student, I am constantly deepening my specialized knowledge of IT to build better digital experiences.",
              },
              {
                period: "2018 - 2020",
                title: "Computer System Servicing",
                school: "Camarines Sur National High School",
                desc: "I have practical training in Computer Systems Servicing, giving me a well-rounded understanding of both hardware and software.",
              },
              {
                period: "2014 - 2020",
                title: "Basic Education - High School",
                school: "Camarines Sur National High School",
                desc: "My academic background includes completing my basic high school education before pursuing my degree in Information Technology.",
              },
            ].map((edu) => (
              <div key={edu.period} data-reveal className="flex flex-col text-center">
                <p className="text-[13px] font-light">{edu.period}</p>
                <p className="text-[14px] font-bold mt-1 leading-snug">{edu.title}</p>
                <p className="text-[12px] font-medium mt-1 leading-relaxed text-[#333]">{edu.school}</p>
                <p className="text-[12px] font-light mt-2 leading-relaxed text-justify">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div></div>

        {/* Divider */}
        <div className="h-px bg-black/20 mt-10 lg:mt-14" />

        {/* Skills circles */}
        <div data-reveal="fade" className="mt-10 lg:mt-16 flex items-center justify-end">
          {/* Circle 1 — Designing (solid, text straight) */}
          <div className="skill-circle relative z-10 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px] xl:w-[268px] xl:h-[268px] rounded-full bg-[#222] flex flex-col items-center justify-center overflow-hidden shrink-0">
            <span className="text-[#d6d6d6] text-[36px] sm:text-[54px] lg:text-[72px] xl:text-[90px] font-bold leading-none">Desi</span>
            <span className="text-[#d6d6d6] text-[36px] sm:text-[54px] lg:text-[72px] xl:text-[90px] font-bold leading-none">gning</span>
          </div>
          {/* Circle 2 — Programming (outlined, text rotated -10deg) */}
          <div className="skill-circle skill-circle-reverse relative z-20 -ml-6 sm:-ml-10 lg:-ml-14 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px] xl:w-[268px] xl:h-[268px] rounded-full bg-[#222] ring-[6px] ring-[#d6d6d6] flex flex-col items-center justify-center overflow-hidden shrink-0">
            <div className="-rotate-[9.96deg] flex flex-col items-center">
              <span className="text-[#d6d6d6] text-[28px] sm:text-[42px] lg:text-[56px] xl:text-[70px] font-bold leading-none">Progra</span>
              <span className="text-[#d6d6d6] text-[28px] sm:text-[42px] lg:text-[56px] xl:text-[70px] font-bold leading-none">mming</span>
            </div>
          </div>
          {/* Circle 3 — MultiMedia (outlined, text rotated +8deg) */}
          <div className="skill-circle relative z-30 -ml-6 sm:-ml-10 lg:-ml-14 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px] xl:w-[268px] xl:h-[268px] rounded-full bg-[#222] ring-[6px] ring-[#d6d6d6] flex flex-col items-center justify-center overflow-hidden shrink-0 p-0">
            <div className="rotate-[7.79deg] flex flex-col items-center">
              <span className="text-[#d6d6d6] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[85px] font-bold leading-none">Multi</span>
              <span className="text-[#d6d6d6] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[85px] font-bold leading-none">Media</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const services = [
    {
      title: "UI / Ux Design",
      desc: "I specialize in crafting visually stunning and highly intuitive interfaces that prioritize a seamless user journey. Through thoughtful design and layout planning, I transform complex concepts into engaging, user-friendly digital experiences.",
    },
    {
      title: "Front & Back-End Programming",
      desc: "I specialize in crafting visually stunning and highly intuitive interfaces that prioritize a seamless user journey. Through thoughtful design and layout planning, I transform complex concepts into engaging, user-friendly digital experiences.",
    },
    {
      title: "Multimedia",
      desc: "I am highly skilled in multimedia production, bringing visual stories to life through hands-on camera work and dynamic video editing. This allows me to shoot raw, high-quality footage and transform it into engaging final cuts that capture the audience's attention.",
    },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative bg-[#d6d6d6] overflow-hidden border-t border-black/10">
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-screen">

        {/* LEFT — logo + Services title */}
        <div className="relative lg:w-[42%] shrink-0 flex flex-col justify-between overflow-hidden px-8 md:px-12 pt-12 pb-10 lg:pt-0 lg:px-0 lg:pb-0">
          {/* Group24 logo — fills upper-left, bleeds off edges */}
          <div className="relative w-full lg:h-[55%] h-[260px] sm:h-[320px] overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              fill="none"
              viewBox="0 0 714.218 594"
              preserveAspectRatio="xMinYMin meet"
            >
              <path d={portfolioSvg.p4dee300} fill="#0C0C0C" />
              <path d={portfolioSvg.p38728080} fill="#7B7B7B" />
              <path d={portfolioSvg.p6a60500} fill="#7B7B7B" />
              <path d={portfolioSvg.p13b24640} fill="#7B7B7B" />
              <ellipse cx="478.4" cy="334.906" fill="#141414" rx="111.899" ry="107.423" />
            </svg>
          </div>

          {/* "Services" title */}
          <div data-reveal className="lg:px-10 xl:px-14 pb-8 lg:pb-12 select-none">
            <div className="text-[72px] sm:text-[100px] lg:text-[120px] xl:text-[150px] font-normal leading-none">Serv</div>
            <div className="flex items-center leading-none">
              <span className="text-[72px] sm:text-[100px] lg:text-[120px] xl:text-[150px] font-normal leading-none">i</span>
              <div className="shrink-0 w-[44px] h-[44px] sm:w-[62px] sm:h-[62px] lg:w-[78px] lg:h-[78px] xl:w-[96px] xl:h-[96px]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 105.929 105.929">
                  <g transform="rotate(-91.55 52.9645 52.9645)">
                    <path d={portfolioSvg.p3222b400} fill="#7B7B7B" />
                    <path d={portfolioSvg.p3f69800} fill="#141414" />
                  </g>
                </svg>
              </div>
              <span className="text-[72px] sm:text-[100px] lg:text-[120px] xl:text-[150px] font-normal leading-none">es</span>
            </div>
          </div>
        </div>

        {/* RIGHT — service items */}
        <div className="flex-1 flex flex-col justify-center gap-10 lg:gap-12 px-8 md:px-12 lg:px-14 xl:px-16 py-12 lg:py-16 border-t lg:border-t-0 lg:border-l border-black/10">
          {services.map((service, i) => (
            <div key={i} data-reveal className="flex flex-col m-0">
              <h3 className="text-[32px] lg:text-[48px] xl:text-[56px] font-normal leading-tight">{service.title}</h3>
              <p className="mt-4 text-[15px] lg:text-[16px] font-normal leading-relaxed text-justify">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("DESIGN");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs: { label: string; value: ProjectTab; underlineW: number }[] = [
    { label: "Design", value: "DESIGN", underlineW: 46 },
    { label: "Develop", value: "DEVELOP", underlineW: 55 },
    { label: "Multimedia", value: "MULTIMEDIA", underlineW: 72 },
  ];

  const slideIndex = { DESIGN: 0, DEVELOP: 1, MULTIMEDIA: 2 }[activeTab];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative bg-white overflow-hidden pt-16 pb-24 lg:pt-20 lg:pb-32">
      {/* Decorative orbit circle — top-right */}
      <div className="absolute -top-20 right-0 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] pointer-events-none rotate-[6.87deg]">
        <Group271 />
      </div>

      {/* Decorative "bp" logo — bottom-left */}
      <div className="absolute -bottom-16 left-0 w-[380px] h-[315px] sm:w-[500px] sm:h-[415px] lg:w-[591px] lg:h-[491px] pointer-events-none">
        <Group27 />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 data-reveal className="text-[64px] sm:text-[96px] lg:text-[128px] font-normal text-center leading-none mb-6 lg:mb-8">Projects</h2>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-1 sm:gap-8 lg:gap-[70px] mb-4" role="group" aria-label="Project categories">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                aria-pressed={isActive}
                aria-controls="project-gallery"
                onClick={() => setActiveTab(tab.value)}
                className="project-tab cursor-pointer flex flex-col items-center h-11 w-[88px] sm:w-[100px] justify-center gap-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <span className={`text-[15px] font-normal leading-[18px] ${isActive ? "text-[#626262]" : "text-black"}`}>
                  {tab.label}
                </span>
                <div
                  className="tab-underline h-1"
                  aria-hidden="true"
                >
                  <svg fill="none" height="2" viewBox={`0 0 ${tab.underlineW} 2`} width={tab.underlineW}>
                    <line stroke="#626262" strokeWidth="2" x2={tab.underlineW} y1="1" y2="1" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sliding carousel — all panels side-by-side, clipped */}
        <div id="project-gallery" data-reveal="fade" role="region" aria-label={`${tabs[slideIndex].label} projects`} className="overflow-hidden rounded-[10px]" style={{ height: "clamp(320px, 60vw, 663px)" }}>
          <div
            className="project-track flex h-full"
            style={{
              width: "300%",
              transform: `translateX(${(-slideIndex * 100) / 3}%)`,
            }}
          >
            {projectPanels.map((projects, pi) => (
              <div key={pi} aria-hidden={pi !== slideIndex} inert={pi !== slideIndex} className="h-full" style={{ width: "33.333%" }}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] h-full">
                  {projects.map((project, i) => (
                    <button
                      key={project.id}
                      type="button"
                      aria-label={`View ${project.title} project details`}
                      aria-haspopup="dialog"
                      onClick={() => setSelectedProject(project)}
                      className={`project-image relative min-w-0 cursor-pointer rounded-[10px] overflow-hidden text-left ${i === 0 ? "shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)]" : ""}`}
                    >
                      <img src={project.image} alt={project.imageAlt} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                      <span aria-hidden="true" className="project-image-caption absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-[#222] px-3 py-2.5 text-white sm:px-4 sm:py-3">
                        <span className="truncate text-[12px] font-medium sm:text-sm">{project.title}</span>
                        <span className="shrink-0 text-[11px] sm:text-xs">View details</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}

const certificates = [
  {
    year: "2026",
    name: "Git for Teams",
    source: "LinkedIn",
    desc: "We learned how to use Git commands to ensure a version control to our system and to make sure all team members have access to the project.",
  },
  {
    year: "2025",
    name: "CCNA Introduction to Networks",
    source: "LinkedIn",
    desc: "Here we build our networking skills and get ready for CCNA certification and associate level jobs.",
  },
  {
    year: "2025",
    name: "JavaScript Essentials",
    source: "CCNA & CCNP",
    desc: "Design, Develop, and improve JavaScript programs. Boost our programming skills to start our career in technology.",
  },
  {
    year: "2024",
    name: "Networking Devices and Initial Configuration",
    source: "",
    desc: "For network essentials and build our foundational skills on network engineering.",
  },
];

const achievements = [
  {
    img: imgRectangle20,
    title: "Hackathon Champion",
    desc: "We develop and propose a offline SOS for flood. For bridging the critical gaps between residents and responder.",
  },
  {
    img: imgRectangle21,
    title: "Gawad Unceano",
    desc: "Receiving the Gawad Unceano was a significant milestone that recognized my academic dedication and technical excellence during my university years.",
  },
  {
    img: imgRectangle22,
    title: "Idea2StartUp Participant",
    desc: "Participating in the Idea2Startup + Bloomberg Challenge allowed me to apply my software and IT skills to solve critical real-world problems.",
  },
];

function PortfolioSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative bg-white overflow-hidden pb-20 lg:pb-28">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Two-column header: bp logo + "Portfolio" title left | description + certificates right */}
        <div className="flex flex-col lg:flex-row lg:items-start">
          {/* LEFT — decorative bp logo above "Portfolio" title */}
          <div className="lg:w-[40%] shrink-0 flex flex-col">
            <div className="w-full max-w-[420px] aspect-[591/491] pointer-events-none -ml-6 lg:-ml-10">
              <Group272 />
            </div>
            <h2 data-reveal className="text-[64px] sm:text-[80px] lg:text-[100px] font-normal leading-none -mt-4">Portfolio</h2>
          </div>

          {/* RIGHT — description + certificates */}
          <div className="mt-8 lg:mt-16 flex-1">
            <p data-reveal className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-justify">
              During my <strong>3+</strong> at the university, I achieved multiple academic milestones while honing my skills in mobile and web app development and design. Alongside my software creation abilities, I also gained hands-on expertise in system troubleshooting and basic networking.
            </p>

            <div data-reveal className="mt-8">
              <h3 className="text-[24px] lg:text-[32px] font-medium mb-5">Certificates</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
                <div className="flex flex-col gap-6 sm:pr-8 pb-6 sm:pb-0">
                  {[certificates[0], certificates[2]].map((cert, i) => (
                    <div key={i} className="flex gap-3">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 mt-[3px]">
                        <circle cx="5" cy="5" r="5" fill="#222" />
                      </svg>
                      <div className="flex-1">
                        <div className="inline-flex items-center bg-[#222] text-white text-[10px] rounded-[5px] px-2 h-[15px] mb-1.5">{cert.year}</div>
                        <div className="flex flex-wrap items-baseline gap-x-1 text-[10px]">
                          <span className="font-medium">{cert.name}</span>
                          {cert.source && <span className="font-thin text-black/70"> —  {cert.source}</span>}
                        </div>
                        <p className="text-[10px] font-light leading-[12px] mt-1.5 w-[260px] max-w-full">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-6 sm:pl-8 pt-6 sm:pt-0">
                  {[certificates[1], certificates[3]].map((cert, i) => (
                    <div key={i} className="flex gap-3">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 mt-[3px]">
                        <circle cx="5" cy="5" r="5" fill="#222" />
                      </svg>
                      <div className="flex-1">
                        <div className="inline-flex items-center bg-[#222] text-white text-[10px] rounded-[5px] px-2 h-[15px] mb-1.5">{cert.year}</div>
                        <div className="flex flex-wrap items-baseline gap-x-1 text-[10px]">
                          <span className="font-medium">{cert.name}</span>
                          {cert.source && <span className="font-thin text-black/70"> —  {cert.source}</span>}
                        </div>
                        <p className="text-[10px] font-light leading-[12px] mt-1.5 w-[260px] max-w-full">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements — fixed-size cards from Figma imports */}
        <div className="mt-12">
          <h3 data-reveal className="text-[24px] lg:text-[32px] font-medium mb-6">Achievements</h3>
          <div className="flex flex-wrap gap-5 justify-start">
            <div data-reveal className="relative h-[398px] w-full max-w-[392px] shrink-0">
              <div className="absolute left-0 top-0 h-[398px] w-[392px] origin-top-left" style={{ transform: "scale(clamp(0.6, calc((100vw - 48px) / 392), 1))" }}>
                <Achievements1 />
              </div>
            </div>
            <div data-reveal className="relative h-[398px] w-full max-w-[392px] shrink-0">
              <div className="absolute left-0 top-0 h-[398px] w-[392px] origin-top-left" style={{ transform: "scale(clamp(0.6, calc((100vw - 48px) / 392), 1))" }}>
                <Achievements2 />
              </div>
            </div>
            <div data-reveal className="relative h-[398px] w-full max-w-[392px] shrink-0">
              <div className="absolute left-0 top-0 h-[398px] w-[392px] origin-top-left" style={{ transform: "scale(clamp(0.6, calc((100vw - 48px) / 392), 1))" }}>
                <Achievements3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConclusionSection() {
  return (
    <section className="bg-white py-16 lg:py-24 flex flex-col items-center text-center px-6">
      <h2 data-reveal className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium leading-snug max-w-3xl">
        Have an idea? Let's turn it into a digital reality.
      </h2>
      <p className="mt-4 text-[15px] lg:text-[18px] font-normal text-[#333] max-w-2xl leading-relaxed">
        I am always eager to collaborate on fresh ideas and tackle exciting design or technical challenges. I can't wait to partner with you and bring your next big project to life!
      </p>
      <a
        href="mailto:imda.realadrian0929@gmail.com"
        className="motion-button mt-8 flex items-center gap-2 bg-[#e9e9e9] hover:bg-[#dedede] rounded-full px-6 py-3 cursor-pointer"
      >
        <span className="text-[15px] font-light">Contact Me</span>
        <div className="button-icon w-6 h-6 rounded-full bg-[#222] flex items-center justify-center shrink-0">
          <svg width="10" height="10" viewBox="0 0 15.3315 15.3312" fill="none">
            <path d={svgPaths.p1113c200} fill="#DEDEDE" />
          </svg>
        </div>
      </a>
    </section>
  );
}

function FooterSection({ onNavClick }: { onNavClick?: (section: string) => void }) {
  const links = ["About Me", "Services", "Projects", "Portfolio"];
  return (
    <footer className="relative bg-[#222] overflow-hidden py-10 lg:py-14">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute border border-[#dedede] rounded-xl" style={{ width: 202, height: 194, left: -101, top: -97 }} />
        <div className="absolute border border-[#dedede] rounded-xl" style={{ width: 278, height: 301, left: 33, top: 108 }} />
        <div className="absolute border border-[#dedede] rounded-xl" style={{ width: 202, height: 194, right: -50, top: 80 }} />
        <div className="absolute border border-[#dedede] rounded-xl" style={{ width: 202, height: 194, right: 200, top: -30 }} />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <LogoIconLight className="h-10 w-12 shrink-0" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-1">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 lg:gap-6">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => onNavClick?.(link)}
                className="nav-link text-white/80 text-[14px] font-normal hover:text-white cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
          <div className="md:ml-auto">
            <a href="mailto:imda.realadrian0929@gmail.com" className="nav-link inline-block text-white text-[16px] lg:text-[20px] font-light">
              imda.realadrian0929@gmail.com
            </a>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const motionRef = useScrollReveal();
  const refs: Record<string, React.RefObject<HTMLElement | null>> = {
    "About Me": useRef<HTMLElement>(null),
    "Services": useRef<HTMLElement>(null),
    "Projects": useRef<HTMLElement>(null),
    "Portfolio": useRef<HTMLElement>(null),
  };

  const handleNavClick = (section: string) => {
    scrollToSection(refs[section]?.current);
  };

  return (
    <div ref={motionRef} className="portfolio min-h-screen font-sans">
      <HeroSection refs={refs} />
      <AboutMeSection sectionRef={refs["About Me"]} />
      <ServicesSection sectionRef={refs["Services"]} />
      <ProjectsSection sectionRef={refs["Projects"]} />
      <PortfolioSection sectionRef={refs["Portfolio"]} />
      <ConclusionSection />
      <FooterSection onNavClick={handleNavClick} />
    </div>
  );
}
