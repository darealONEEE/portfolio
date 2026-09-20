import svgPaths from "./svg-jzldnlquad";

function Group2() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[145px] leading-[130px] left-1/2 not-italic text-[200px] text-black text-center top-0 w-[180px]">i</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[145px] left-[31px] overflow-clip top-[calc(57.14%+56.86px)] w-[180px]">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute flex items-center justify-center left-[143px] size-[108.755px] top-[calc(57.14%+95.86px)]">
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

function ServicesIcon() {
  return (
    <div className="absolute contents left-[31px] top-[calc(42.86%+73.14px)]" data-name="SERVICES ICON">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] leading-[130px] left-[calc(10%+136px)] not-italic text-[200px] text-black text-center top-[calc(42.86%+73.14px)] w-[402px] whitespace-pre-wrap">{`Serv   `}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[145px] leading-[130px] left-[calc(30%-74px)] not-italic text-[200px] text-black text-center top-[calc(57.14%+56.86px)] w-[212px]">es</p>
      <Frame />
      <Group1 />
    </div>
  );
}

function UiUxDescription() {
  return (
    <div className="[word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[233px] left-[calc(40%+160px)] not-italic text-black top-[93px] w-[618px]" data-name="UI/UX Description">
      <p className="-translate-x-1/2 absolute leading-[130px] left-[199px] text-[64px] text-center top-0 whitespace-nowrap">UI / Ux Design</p>
      <p className="absolute leading-[25px] left-0 text-[18px] text-justify top-[133px] w-[618px]">I specialize in crafting visually stunning and highly intuitive interfaces that prioritize a seamless user journey. Through thoughtful design and layout planning, I transform complex concepts into engaging, user-friendly digital experiences.</p>
    </div>
  );
}

function FbProgrammingDesc() {
  return (
    <div className="[word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[256px] left-[calc(40%+160px)] not-italic text-black top-[calc(28.57%+78.43px)] w-[690px]" data-name="FB PROGRAMMING DESC">
      <p className="absolute leading-[65px] left-0 text-[64px] top-0 w-[690px]">{`Front & Back-End Programming`}</p>
      <p className="absolute leading-[25px] left-0 text-[18px] text-justify top-[155px] w-[618px]">I specialize in crafting visually stunning and highly intuitive interfaces that prioritize a seamless user journey. Through thoughtful design and layout planning, I transform complex concepts into engaging, user-friendly digital experiences.</p>
    </div>
  );
}

function FbProgrammingDesc1() {
  return (
    <div className="[word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[256px] left-[calc(40%+160px)] not-italic text-black top-[calc(57.14%+86.86px)] w-[690px]" data-name="FB PROGRAMMING DESC">
      <p className="absolute leading-[65px] left-0 text-[64px] top-0 w-[690px]">Multimedia</p>
      <p className="absolute leading-[25px] left-0 text-[18px] text-justify top-[86px] w-[618px]">{`I am highly skilled in multimedia production, bringing visual stories to life through hands-on camera work and dynamic video editing. This allows me to shoot raw, high-quality footage and transform it into engaging final cuts that capture the audience's attention.`}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[594px] left-[-84px] top-[-109px] w-[714.217px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="594" preserveAspectRatio="none" viewBox="0 0 714.218 594" width="714.218">
        <g id="Group 24">
          <path d={svgPaths.p4dee300} fill="#0C0C0C" id="Ellipse 28" />
          <path d={svgPaths.p38728080} fill="#7B7B7B" id="Ellipse 25" />
          <path d={svgPaths.p6a60500} fill="#7B7B7B" id="Ellipse 26" />
          <path d={svgPaths.p13b24640} fill="#7B7B7B" id="Rectangle 3" />
          <ellipse cx="478.4" cy="334.906" fill="#141414" id="Ellipse 27" rx="111.899" ry="107.423" />
        </g>
      </svg>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-[#d6d6d6] relative size-full" data-name="Portfolio">
      <ServicesIcon />
      <UiUxDescription />
      <FbProgrammingDesc />
      <FbProgrammingDesc1 />
      <Group />
    </div>
  );
}