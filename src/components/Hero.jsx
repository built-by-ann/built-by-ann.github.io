export default function Hero() {
  return (
    <section className="w-full bg-deep-maroon text-blush-pink font-body overflow-hidden relative">
      {/* Desktop layout (≥1024px) */}
      <div className="hidden lg:block min-h-[680px] relative">
        {/* Circular profile image */}
        <img
          src="/profile.png"
          alt="ann mathew"
          className="absolute w-[525px] h-[525px] top-[100px] left-[728px] object-cover rounded-full z-10 shadow-lg"
        />

        {/* Header text */}
        <div className="absolute top-[125px] left-[188px] w-[463px] font-header text-[68px] font-bold leading-none text-blush-pink">
          welcome to my portfolio!
        </div>

        {/* Body paragraph */}
        <div className="absolute top-[308px] left-[189px] w-[417px] text-[19px] italic leading-[1.5] text-lavender">
          <p>
            i’m <span className="text-blush-pink font-bold">ann mathew</span>, and i’m a computer science and climate studies double major at vanderbilt university. i’m passionate about using technology to drive meaningful, real-world change.
          </p>
          <br />
          <p>
            this portfolio is a window into the work i've done so far: projects, research, and innovations that i’ve poured my heart into. i’m thrilled to share it with you, so thanks for stopping by!
          </p>
        </div>
      </div>

      {/* Mobile layout (<1024px) */}
      <div className="block lg:hidden px-6 pt-12 pb-8 flex flex-col items-center text-center">
        <h1 className="font-header text-4xl font-bold mb-6">
          welcome to my portfolio!
        </h1>
        <img
          src="/profile.png"
          alt="ann mathew"
          className="w-[300px] h-[300px] object-cover rounded-full shadow-md mb-6"
        />
        <p className="text-[18px] text-lavender italic leading-relaxed">
          i’m <span className="text-blush-pink font-bold">ann mathew</span>, and i’m a computer science and climate studies double major at Vanderbilt University. I’m passionate about using technology to drive meaningful, real-world change.
        </p>
        <br />
        <p className="text-[18px] text-lavender italic leading-relaxed">
          this portfolio is a window into the work I’ve done so far: projects, research, and innovations that I’ve poured my heart into. i’m thrilled to share it with you, so thanks for stopping by!
        </p>
      </div>
    </section>
  );
}
