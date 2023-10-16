function ItensImage(props) {
  const { href, item, src, alt } = props;
  return (
    <li className="cursor-pointer text-xl">
      <a
        className="flex gap-2 items-center"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <img className="h-[20px]" src={src} alt={alt} />
        {item}
      </a>
    </li>
  );
}
export default ItensImage;
