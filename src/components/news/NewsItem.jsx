function NewsItem({ contents }) {
  const { title, content } = contents;
  return (
    <li className="flex flex-col gap-2 py-5 not-last:border-b-1 not-last:border-b-(--gray-blue)/40 lg:py-8">
      <h3 className="text-(--off-white) font-extrabold tracking-wider">
        <a
          href="#"
          className="hover:text-(--soft-orange) focus:border-none focus:outline-none focus:text-(--soft-orange)"
        >
          {title}
        </a>
      </h3>
      <p className="text-(--gray-blue)">{content}</p>
    </li>
  );
}

export default NewsItem;
