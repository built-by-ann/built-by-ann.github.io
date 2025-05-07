export default function Footer() {
  const contactHref = `${import.meta.env.BASE_URL}#contact`;

  return (
    <footer className="w-full bg-dusty-rose py-6 px-6 lg:px-[188px]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="text-blush-pink text-[20px] font-body font-bold">
          built-by-ann
        </div>
        <a
          href={contactHref}
          className="text-blush-pink text-[20px] font-body font-bold text-right hover:underline"
        >
          contact me
        </a>
      </div>
    </footer>
  );
}
