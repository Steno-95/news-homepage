import NewsItem from "./NewsItem";

const contents = [
  {
    title: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

function News() {
  return (
    <section className="new-section">
      <h2 className="text-(--soft-orange) font-extrabold">New</h2>

      <ul>
        {contents.map((news) => (
          <NewsItem contents={news} key={news.title} />
        ))}
      </ul>
    </section>
  );
}

export default News;
