const ItensLogo = (props) => {
  const { name, src, alt, title } = props;

  return (
    <>
      <figure className="h-14 w-14 text-center">
        <img className="w-full h-full" src={src} alt={alt} title={title} />
        <figcaption> {name}</figcaption>
      </figure>
    </>
  );
};
export default ItensLogo;
