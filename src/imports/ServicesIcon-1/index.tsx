import svgPaths from "./svg-yx4u6qjvvm";

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[145px] leading-[130px] left-1/2 not-italic text-[200px] text-black text-center top-0 w-[180px]">i</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[145px] left-0 overflow-clip top-0 w-[180px]">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute flex items-center justify-center left-0 size-[108.755px] top-0">
      <div className="flex-none rotate-[-91.55deg]">
        <div className="relative size-[105.929px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="105.929" preserveAspectRatio="none" viewBox="0 0 105.929 105.929" width="105.929">
            <g id="Group 27">
              <path d={svgPaths.p3222b400} fill="#7B7B7B" id="Ellipse 26" />
              <path d={svgPaths.p3f69800} fill="#141414" id="Ellipse 27" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ServicesIcon() {
  return (
    <div className="contents relative size-full" data-name="SERVICES ICON">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] leading-[130px] left-0 not-italic text-[200px] text-black text-center top-0 w-[402px] whitespace-pre-wrap">{`Serv   `}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[145px] leading-[130px] left-0 not-italic text-[200px] text-black text-center top-0 w-[212px]">es</p>
      <Frame />
      <Group />
    </div>
  );
}