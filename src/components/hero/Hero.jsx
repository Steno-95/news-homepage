function Hero() {
  return (
    <section className="hero">
      <picture className="w-full md:col-span-2">
        <source
          srcSet="/images/image-web-3-desktop.jpg"
          media="(min-width: 1024px)"
        />
        <img
          src="/images/image-web-3-mobile.jpg"
          alt="picture of a puzzle of many colors"
          className="w-full"
        />
      </picture>
      <h1 className="text-(--darkest-blue) font-extrabold md:row-span-2 md:leading-18">
        The Bright Future of Web 3.0?
      </h1>
      <p className="">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="bg-(--soft-red) w-fit px-8 py-2 font-bold tracking-[.2em] text-[clamp(0.94em,_0.4em_+_2.5vw,_1.5em)] hover:bg-(--darkest-blue) hover:text-(--off-white) cursor-pointer focus:border-none focus:outline-none focus:bg-(--darkest-blue) focus:text-(--off-white) hover:font-normal focus:font-normal">
        READ MORE
      </button>
    </section>
  );
}

export default Hero;
