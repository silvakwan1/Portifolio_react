import { Link } from "react-scroll";

function Item(props) {
  const { to, item } = props;

  return (
    <Link to={to} smooth={true} duration={500}>
      <li className="list-none cursor-pointer text-xl">{item}</li>
    </Link>
  );
}

export default Item;
