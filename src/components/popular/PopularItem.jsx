function PopularItem({ contents, index }) {
  const { img, alt, title, content } = contents;
  return (
    <li className="grid grid-cols-3 gap-5 lg:gap-3">
      <figure>
        <img
          src={`/images/image-${img}.jpg`}
          alt={alt}
          className="h-fit lg:h-full"
        />
      </figure>
      <article className="col-span-2 flex flex-col gap-3 sm:gap-8 lg:max-w-70 md:gap-2 ">
        <span className="text-(--soft-red) font-extrabold text-[clamp(1em,_.8em_+_2.5vw,_2.5em)] block">
          0{index + 1}
        </span>
        <h4 className="font-extrabold text-[clamp(1em,_.5em_+_2vw,_1.5em)]">
          <a
            href="#"
            className="hover:text-(--soft-red) focus:border-none focus:outline-none focus:text-(--soft-red)"
          >
            {title}
          </a>
        </h4>
        <p className="text-[clamp(.8em,_.6em_+_1vw,_1.2em)]">{content}</p>
      </article>
    </li>
  );
}

export default PopularItem;
