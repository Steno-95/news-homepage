function Hero() {
  return (
    <section className="hero">
      <picture className="w-full">
        <source
          srcSet="/images/image-web-3-desktop.jpg"
          media="(min-width: 1024px)"
        />
        <img
          src="/images/image-web-3-mobile.jpg"
          alt="picture of a puzzle of many colors"
        />
      </picture>
      <h1 className="text-(--darkest-blue) font-extrabold">
        The Bright Future of Web 3.0?
      </h1>
      <p className="">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="bg-(--soft-red) w-fit px-8 py-2 font-bold tracking-[.2em]">
        READ MORE
      </button>
    </section>
  );
}

export default Hero;
