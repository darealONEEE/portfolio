import svgPaths from "./svg-imj8zjw1c9";
import imgPics1 from "./6a87301f7abfa1072689e561b8acc4514b486af1.png";

function Group() {
  return (
    <div className="absolute h-[667.839px] left-0 top-0 w-[803px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="667.839" preserveAspectRatio="none" viewBox="0 0 803.001 667.839" width="803.001">
        <g id="Group 25">
          <path d={svgPaths.p3717a9f0} fill="#7B7B7B" id="Ellipse 28" />
          <path d={svgPaths.p37c9580} fill="#1B1B1B" id="Ellipse 25" />
          <path d={svgPaths.p29eb9180} fill="#1B1B1B" id="Ellipse 26" />
          <path d={svgPaths.pb48dff2} fill="#1B1B1B" id="Rectangle 3" />
          <ellipse cx="537.869" cy="376.537" fill="#7B7B7B" id="Ellipse 27" rx="125.809" ry="120.776" />
        </g>
      </svg>
    </div>
  );
}

export default function Me() {
  return (
    <div className="contents relative size-full" data-name="ME">
      <Group />
      <div className="absolute h-[799px] left-0 top-0 w-[792px]" data-name="PICS 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[132.17%] left-0 max-w-none top-[-23.78%] w-full" src={imgPics1} />
        </div>
      </div>
    </div>
  );
}