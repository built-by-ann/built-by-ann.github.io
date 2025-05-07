export default function Button({ href, children }) {
  // If it's a relative internal path, prepend the base URL
  const fixedHref = href.startsWith('/') ? `${import.meta.env.BASE_URL}${href.slice(1)}` : href;

  return (
    <a
      href={fixedHref}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-blue text-blush-pink font-body text-[18px] lg:text-[24px] font-normal px-6 py-5 w-[280px] lg:w-[474px] flex items-center justify-center rounded-md shadow hover:opacity-90 transition text-center"
    >
      {children}
    </a>
  );
}
