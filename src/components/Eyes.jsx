export default function Eyes() {
const readMoreHref = `${import.meta.env.BASE_URL}read-more`;

return (
  <section className="w-full bg-blush-pink text-ocean-blue font-body py-20 px-6 lg:px-[188px]">
    <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-8 lg:items-center">
      {/* Left: Text Content in columns 1–6 */}
      <div className="lg:col-span-6">
        <h2 className="text-[48px] lg:text-[68px] font-header font-bold text-peach-orange mb-4 leading-[1] lg:w-[708px]">
          eyes on the ocean
        </h2>
        <h3 className="text-[20px] lg:text-[24px] font-bold text-peach-orange mb-6 lg:w-[400px]">
          detecting illegal fishing with satellites and artificial intelligence
        </h3>
        <p className="text-[20px] lg:text-[24px] italic leading-normal text-ocean-blue lg:w-[590px]">
          I built an end-to-end prototype that uses radar satellite images (SAR) and vessel tracking data to identify unlicensed fishing activity, even when boats try to hide. The system preprocesses satellite imagery, aligns it with mock AIS data, trains a deep learning model, and lays the groundwork for time-series analysis of suspicious vessel behavior.
        </p>
      </div>

      {/* Right: Buttons in columns 8–12 */}
      <div className="mt-12 lg:mt-4 lg:col-start-8 lg:col-span-5 flex flex-col gap-16 lg:items-end items-center">
        <a
          href={readMoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dusty-rose text-blush-pink text-[20px] lg:text-[24px] font-body font-normal w-full max-w-[358px] h-[86px] flex items-center justify-center rounded-md shadow hover:opacity-90 transition"
        >
          read more about it!
        </a>
        <a
          href="https://github.com/yourusername/illegal-fishing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dusty-rose text-blush-pink text-[20px] lg:text-[24px] font-body font-normal w-full max-w-[358px] h-[86px] flex items-center justify-center rounded-md shadow hover:opacity-90 transition"
        >
          explore the github repo!
        </a>
      </div>
    </div>
  </section>
);
}
