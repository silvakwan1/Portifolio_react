import { Link } from "react-scroll";

function Item(props) {
  const { to, item } = props;

  return (
    <li className="list-none cursor-pointer text-xl">
      <Link to={to} smooth={true} duration={500}>
        {item}
      </Link>
    </li>
  );
}

export default Item;
