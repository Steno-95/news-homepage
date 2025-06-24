function PopularItem({ contents, index }) {
  const { img, alt, title, content } = contents;
  return (
    <li className="grid grid-cols-3 gap-5">
      <figure className="my-4">
        <img src={`/images/image-${img}.jpg`} alt={alt} />
      </figure>
      <article className="col-span-2 py-2 space-y-3">
        <span className="text-(--soft-red) font-extrabold text-[clamp(1.5em,_1em_+_0.5vw,_2.5em)] block">
          0{index + 1}
        </span>
        <h4 className="font-extrabold">{title}</h4>
        <p>{content}</p>
      </article>
    </li>
  );
}

export default PopularItem;
