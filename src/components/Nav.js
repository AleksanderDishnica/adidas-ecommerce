export function Nav() {
  let array = ["Home", "About", "Contact"];

  const listItems = array.map((a) => (
    <li key="1" className="inline mr-3">
      <a href="/">{a}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{listItems}</ul>
    </nav>
  );
}
