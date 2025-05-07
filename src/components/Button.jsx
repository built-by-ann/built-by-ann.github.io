export default function Button({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-blue text-blush-pink font-body text-[18px] lg:text-[24px] font-normal px-6 py-5 w-[280px] lg:w-[474px] flex items-center justify-center rounded-md shadow hover:opacity-90 transition text-center"
    >
      {children}
    </a>
  );
}
