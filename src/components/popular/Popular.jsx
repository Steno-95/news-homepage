import PopularItem from "./PopularItem";

const contents = [
  {
    img: "retro-pcs",
    alt: "photo containing retro pcs",
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: "top-laptops",
    alt: "photo of a laptop keyboard",
    title: "Top 10 Laptops of 2022",
    content: "Our best picks for various needs and budgets.",
  },
  {
    img: "gaming-growth",
    alt: "photo of a ps5 controller",
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities",
  },
];

function Popular() {
  return (
    <section className="popular-section">
      <ul>
        {contents.map((item, i) => (
          <PopularItem contents={item} key={item.title} index={i} />
        ))}
      </ul>
    </section>
  );
}

export default Popular;
