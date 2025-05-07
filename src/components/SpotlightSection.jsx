export default function Spotlights() {
return (
    <section className="w-full bg-deep-maroon text-ocean-blue font-body py-20 px-6 lg:px-[188px]">
    <div className="max-w-[1440px] mx-auto flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-y-20 lg:gap-x-12 lg:place-items-center">
        {/* Row 1: Text Left, Image Right */}
        <div className="bg-lavender p-6 flex flex-col justify-between w-full max-w-[420px] h-auto lg:h-[420px] text-left">
        <h3 className="font-header text-[20px] lg:text-[24px] font-bold text-slate-blue leading-snug">
            my summer of research with vanderbilt university medical center
        </h3>
        <p className="italic text-[16px] lg:text-[18px] mb-6 lg:mb-0">
            in summer 2024, I worked with dr. allison mccoy to study gaps in electronic health records. i was able to take a deeper look into how small documentation errors can ripple into real-world care, and how better systems can help fix them.
        </p>
        <a
            href="#"
            className="bg-peach-orange text-slate-blue text-[14px] lg:text-[16px] font-bold px-4 py-3 text-center hover:opacity-90 transition rounded-md"
        >
            click here to explore my research!
        </a>
        </div>
        <div className="bg-peach-orange w-full max-w-[420px] aspect-square flex items-center justify-center">
        <img
            src="/public/present.jpg"
            alt="VUMC research"
            className="w-[90%] h-[90%] object-cover rounded-full"
        />
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="bg-peach-orange w-full max-w-[420px] aspect-square flex items-center justify-center">
        <img
            src="/public/friends.JPG"
            alt="Siena Italy"
            className="w-[90%] h-[90%] object-cover rounded-full"
        />
        </div>
        <div className="bg-lavender p-6 flex flex-col justify-between w-full max-w-[420px] h-auto lg:h-[420px] text-right">
        <h3 className="font-header text-[20px] lg:text-[24px] font-bold text-slate-blue leading-snug">
            neural networks and human ones too: my time in siena, italy
        </h3>
        <p className="italic text-[16px] lg:text-[18px] mb-6 lg:mb-0">
            i spent a semester in siena, italy thinking i’d mostly be studying code. instead, i came home with stories: about language, learning, and the friends who turned a quiet italian town into a second home.
        </p>
        <a
            href="#"
            className="bg-peach-orange text-slate-blue text-[14px] lg:text-[16px] font-bold px-4 py-3 text-center hover:opacity-90 transition rounded-md"
        >
            read the whole article here!
        </a>
        </div>
    </div>
    </section>
);
}
