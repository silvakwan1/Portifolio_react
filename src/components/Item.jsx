import { Link } from "react-scroll";

function Item({ to, name }) {
  return (
    <li className="list-none cursor-pointer text-xl">
      <Link to={to} smooth={true} duration={500}>
        {name}
      </Link>
    </li>
  );
}

export default Item;
