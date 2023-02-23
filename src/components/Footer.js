import { Nav } from "./Nav.js";

export function Footer() {
  return (
    <footer className="my-5">
      <hr className="border border-black mb-5" />
      <Nav />

      <img
        alt="Logo"
        className="inline mt-5"
        width="100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png"
      />
    </footer>
  );
}
