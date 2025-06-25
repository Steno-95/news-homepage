import NavigationItem from "./NavigationItem";

const links = ["Home", "New", "Popular", "Trending", "Categories"];

function NavigationList({ className }) {
  return (
    <ul className={"flex gap-5 lg:gap-10 " + className}>
      {links.map((link, i) => (
        <NavigationItem key={i}>{link}</NavigationItem>
      ))}
    </ul>
  );
}

export default NavigationList;
