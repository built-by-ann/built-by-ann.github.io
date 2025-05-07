
import React from "react";

export default function Home() {
  return (
    <div className="bg-deep-maroon text-blush-pink font-body max-w-layout mx-auto overflow-hidden">
      {/* NAVBAR */}
      <header className="w-full h-24 bg-dusty-rose flex items-center justify-between px-12 text-blush-pink text-xl font-bold">
        <span>built-by-ann</span>
        <nav className="flex space-x-6 font-normal">
          <a href="/about">about</a>
          <a href="/resume">resume</a>
          <a href="/projects">projects</a>
          <a href="/spotlights">spotlights</a>
          <a href="/study-abroad">study abroad</a>
          <a href="/contact" className="font-bold">contact me</a>
        </nav>
      </header>


      {/* HERO SECTION */}
      <div className="w-full bg-deep-maroon text-blush-pink font-body">
        <div className="mx-auto max-w-[1440px] px-8">
        <section className="max-w-[1440px] mx-auto px-12 py-24 grid grid-cols-12 items-center text-lavender">
          {/* Text Block: columns 2–6 */}
          <div className="col-start-2 col-span-5">
            <h1 className="font-header text-header mb-6 text-blush-pink">
              welcome to my portfolio!
            </h1>
            <p className="text-body italic mb-4">
              i’m <span className="font-bold text-blush-pink">ann mathew</span>, and i’m a computer science and climate studies double major at Vanderbilt University. I’m passionate about using technology to drive meaningful, real-world change.
            </p>
            <p className="text-body italic mb-6">
              this portfolio is a window into the work I’ve done so far: projects, research, and innovations that I’ve poured my heart into. i’m thrilled to share it with you, so thanks for stopping by!
            </p>

            
            {/* Buttons directly below text */}
            <div className="flex space-x-6 mt-8">
              {/* GitHub Link */}
              <a
                href="https://github.com/built-by-ann"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 px-6 py-3 text-blush-pink text-xl inline-block rounded-md hover:bg-slate-600 transition"
              >
                check out my github!
              </a>

              {/* Resume Download */}
              <a
                href="/AnnMathew_CSResume_Summer2025.pdf"
                download
                className="bg-slate-700 px-6 py-3 text-blush-pink text-xl inline-block rounded-md hover:bg-slate-600 transition"
              >
                download my resume!
              </a>
            </div>
          </div>

          {/* Profile Image: columns 8–12 */}
          <div className="col-start-8 col-span-4 flex justify-center">
          <div className="w-[525px] h-[525px] rounded-full overflow-hidden">
            <img
              src="me.jpg" 
              alt="Ann Mathew"
              className="w-full h-full object-cover"
            />
          </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
