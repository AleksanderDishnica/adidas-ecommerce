export function Img(props) {
  return (
    <div className="relative mb-8 hover:scale-125 overflow-hidden">
      <img alt="" src={props.src} />
      <div className="absolute inset-2 z-0 ring-1 ring-inset ring-blue/10 rounded-lg"></div>
    </div>
  );
}
