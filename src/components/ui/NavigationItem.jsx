function NavigationItem({ children }) {
  return (
    <li>
      <a
        href="#"
        aria-disabled
        className="hover:text-(--soft-red) focus:border-none focus:outline-none focus:text-(--soft-red)"
      >
        {children}
      </a>
    </li>
  );
}

export default NavigationItem;
