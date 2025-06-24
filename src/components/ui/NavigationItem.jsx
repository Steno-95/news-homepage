function NavigationItem({ children }) {
  return (
    <li>
      <a href="#" aria-disabled>
        {children}
      </a>
    </li>
  );
}

export default NavigationItem;
