export default function ItensLogo({ imgSrc, imgAlt, name }) {
  return (
    <figure className="h-14 w-14 text-center">
      <img className="w-full h-full" src={imgSrc} alt={imgAlt} />
      <figcaption> {name}</figcaption>
    </figure>
  );
}
