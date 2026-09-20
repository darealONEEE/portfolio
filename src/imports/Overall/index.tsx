import svgPaths from "./svg-l2at3kw3qv";
import imgRectangle7 from "./7b736462ad44fc8c22a09396e7eee971dbf1dd72.png";
import imgRectangle6 from "./16f2b63f00e7c1e4b0fed75b11bbebe2beb87488.png";
import imgRectangle5 from "./4829f96d6a4cfc16218f8363f2f897f238387e75.png";
import imgRectangle10 from "./d1cd261cfc7170738147bdafa7ffa4a50a67a86f.png";
import imgRectangle9 from "./6dc7acc657d6ea850e95ded89f214038a8b41227.png";
import imgRectangle8 from "./d137c06c73023d895290d5173df5f565c0ae0277.png";
import imgRectangle11 from "./65a016ff04cdac47fb10801a73d948e5b3c38a02.png";
import imgRectangle12 from "./e8cc71c8beaeb9fbe9232ca5795ad408770738e4.png";
import imgRectangle13 from "./c6b39f3ead91b846d204b5faac261ff3c648207f.png";
import imgRectangle14 from "./76f67412f024bbad1b5a1c25700c2ef39004ae9c.png";
import imgRectangle15 from "./9c024b8472f57d796bc74c64604770ac5e4b1d3d.png";
import imgRectangle16 from "./62b00956f953f5afa3cd8a41701c26d69d9aa8b2.png";
import imgRectangle17 from "./71e092c12c29c3f0bf5eea8e35bbbd005fa7b5f9.png";
import imgRectangle18 from "./1e42b7e4fd6525621b955f617bd2ab4ffd6218a8.png";
import imgRectangle19 from "./c594cd950cfdb3211cab04913679ed46569fb61c.png";
import imgPics1 from "./6a87301f7abfa1072689e561b8acc4514b486af1.png";
import imgRectangle20 from "./ffdc2ed176ba73021cacbfa5f3dc43ab454b978b.png";
import imgRectangle21 from "./f0d0802b14bbd438b97bb800109e41559ae74a73.png";
import imgRectangle22 from "./1846e9b576b1a7f910101233db383075696e229b.png";
type CallMeProps = {
  className?: string;
  property1?: "Scroll Down Btn - Default" | "Variant2";
};

function CallMe({ className, property1 = "Scroll Down Btn - Default" }: CallMeProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[60px] relative rounded-[255px] w-[200px] ${isVariant2 ? "bg-[#dedede] drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.1)]" : "bg-[#e9e9e9]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Aeonik:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
            <p className="leading-[18px]">Contact Me</p>
          </div>
          <div className={`flex items-center justify-center relative shrink-0 ${isVariant2 ? "h-[26.813px] w-[26.238px]" : "h-[35.066px] w-[34.885px]"}`}>
            <div className={`flex-none ${isVariant2 ? "rotate-[-2.84deg]" : "rotate-[-32.8deg]"}`}>
              <div className="h-[25.606px] relative w-[25px]" data-name="Scroll Down Icon">
                <div className="absolute contents left-0 right-0 top-0">
                  <div className="absolute aspect-[25/25] left-0 right-0 top-0">
                    <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 25 25" width="25">
                      <circle cx="12.5" cy="12.5" fill="#222222" id="Ellipse 29" r="12.5" />
                    </svg>
                  </div>
                  <div className="absolute aspect-[21.246087122244262/21.246087122244262] flex items-center justify-center left-[1.68px] right-[2.07px] top-[2.68px]" style={{ containerType: "size" }}>
                    <div className={`flex-none rotate-[-11.06deg] ${isVariant2 ? "h-[hypot(15.8431cqw,81.0449cqh)] w-[hypot(81.0449cqw,-15.8431cqh)]" : "h-[hypot(13.5688cqw,69.4109cqh)] w-[hypot(69.4109cqw,-13.5688cqh)]"}`}>
                      <div className="overflow-clip relative size-full" data-name="mi:call">
                        <div className="absolute inset-[8.33%_8.33%_7%_7%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15.3312" preserveAspectRatio="none" viewBox="0 0 15.3315 15.3312" width="15.3315">
                            <path d={svgPaths.p1113c200} fill="#DEDEDE" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type MmediaProps = {
  className?: string;
  property1?: "ACTIVE" | "DEFAULT" | "HOVER";
};

function Mmedia({ className, property1 = "DEFAULT" }: MmediaProps) {
  if (property1 === "HOVER") {
    return (
      <button className={className || "cursor-pointer h-[30px] relative w-[100px]"} data-name="Property 1=HOVER">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bababa] text-[15px] text-center whitespace-nowrap">
              <p className="leading-[18px]">Multimedia</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (property1 === "ACTIVE") {
    return (
      <div className={className || "h-[30px] relative w-[100px]"} data-name="Property 1=ACTIVE">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#626262] text-[15px] text-center w-[min-content]">
              <p className="leading-[18px]">Multimedia</p>
            </div>
            <div className="h-0 relative shrink-0 w-[72px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 72 2" width="72">
                  <line id="Line 1" stroke="#626262" strokeWidth="2" x2="72" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "cursor-pointer h-[30px] relative w-[100px]"} data-name="Property 1=DEFAULT">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
            <p className="leading-[18px]">Multimedia</p>
          </div>
        </div>
      </div>
    </button>
  );
}
type DevelopProps = {
  className?: string;
  property1?: "ACTIVE" | "DEFAULT" | "HOVER";
};

function Develop({ className, property1 = "DEFAULT" }: DevelopProps) {
  if (property1 === "HOVER") {
    return (
      <button className={className || "cursor-pointer h-[30px] relative w-[100px]"} data-name="Property 1=HOVER">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bababa] text-[15px] text-center whitespace-nowrap">
              <p className="leading-[18px]">Develop</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (property1 === "ACTIVE") {
    return (
      <div className={className || "h-[30px] relative w-[100px]"} data-name="Property 1=ACTIVE">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#626262] text-[15px] text-center w-[min-content]">
              <p className="leading-[18px]">Develop</p>
            </div>
            <div className="h-0 relative shrink-0 w-[55px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 55 2" width="55">
                  <line id="Line 1" stroke="#626262" strokeWidth="2" x2="55" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "cursor-pointer h-[30px] relative w-[100px]"} data-name="Property 1=DEFAULT">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
            <p className="leading-[18px]">Develop</p>
          </div>
        </div>
      </div>
    </button>
  );
}
type DesignProps = {
  className?: string;
  property1?: "ACTIVE" | "DEFAULT" | "HOVER";
};

function Design({ className, property1 = "DEFAULT" }: DesignProps) {
  if (property1 === "HOVER") {
    return (
      <button className={className || "cursor-pointer h-[30px] relative w-[100px]"} data-name="Property 1=HOVER">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bababa] text-[15px] text-center whitespace-nowrap">
              <p className="leading-[18px]">Design</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (property1 === "ACTIVE") {
    return (
      <div className={className || "h-[30px] relative w-[100px]"} data-name="Property 1=ACTIVE">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#626262] text-[15px] text-center w-[min-content]">
              <p className="leading-[18px]">Design</p>
            </div>
            <div className="h-0 relative shrink-0 w-[46px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 46 2" width="46">
                  <line id="Line 1" stroke="#626262" strokeWidth="2" x2="46" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "cursor-pointer h-[30px] relative w-[100px]"} data-name="Property 1=DEFAULT">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
            <p className="leading-[18px]">Design</p>
          </div>
        </div>
      </div>
    </button>
  );
}
type ProjectsProps = {
  className?: string;
  property1?: "DESIGN" | "DEVELOP" | "MULTIMEDIA";
};

function Projects({ className, property1 = "DESIGN" }: ProjectsProps) {
  const isDevelop = property1 === "DEVELOP";
  const isMultimedia = property1 === "MULTIMEDIA";
  return (
    <div className={className || "h-[753px] overflow-clip relative w-[1070px]"}>
      <div className="absolute content-stretch flex gap-[70px] items-center left-[315px] top-0" data-name="Navbar">
        <Design className={`h-[30px] relative shrink-0 w-[100px] ${["DEVELOP", "MULTIMEDIA"].includes(property1) ? "cursor-pointer" : ""}`} property1={property1 === "DESIGN" ? "ACTIVE" : undefined} />
        <Develop className={`h-[30px] relative shrink-0 w-[100px] ${isDevelop ? "" : "cursor-pointer"}`} property1={isDevelop ? "ACTIVE" : undefined} />
        <Mmedia className={`h-[30px] relative shrink-0 w-[100px] ${isMultimedia ? "" : "cursor-pointer"}`} property1={isMultimedia ? "ACTIVE" : undefined} />
      </div>
      <div className={`absolute h-[723px] overflow-clip top-[30px] w-[3312px] ${isMultimedia ? "left-[-2242px]" : isDevelop ? "left-[-1121px]" : "left-0"}`} data-name="CAROUSEL">
        <div className="absolute h-[723px] left-0 top-0 w-[1070px]" data-name="DESIGN">
          <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[663px] left-0 top-[60px] w-[1070px]" data-name="Works">
            <div className="col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle7} />
            </div>
            <div className="col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle6} />
            </div>
            <div className="col-3 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle5} />
            </div>
            <div className="col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle10} />
            </div>
            <div className="col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle9} />
            </div>
            <div className="col-3 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle8} />
            </div>
          </div>
        </div>
        <div className="absolute h-[723px] left-[1121px] top-0 w-[1070px]" data-name="DEVELOP">
          <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[663px] left-0 right-0 top-[60px]" data-name="Works">
            <div className="col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle11} />
            </div>
            <div className="col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle12} />
            </div>
            <div className="col-3 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle13} />
            </div>
            <div className="col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle14} />
            </div>
            <div className="col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle15} />
            </div>
            <div className="col-3 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle16} />
            </div>
          </div>
        </div>
        <div className="absolute h-[723px] left-[2242px] top-0 w-[1070px]" data-name="MULTIMEDIA">
          <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[663px] left-0 top-[60px] w-[1070px]" data-name="Works">
            <div className="col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle17} />
            </div>
            <div className="col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle18} />
            </div>
            <div className="col-3 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle19} />
            </div>
            <div className="col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle15} />
            </div>
            <div className="col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type CvProps = {
  className?: string;
  property1?: "Scroll Down Btn - Default" | "Variant2";
};

function Cv({ className, property1 = "Scroll Down Btn - Default" }: CvProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[60px] relative rounded-[255px] w-[200px] ${isVariant2 ? "bg-[#dedede] drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.1)]" : "bg-[#e9e9e9]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Aeonik:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
            <p className="leading-[18px]">CV</p>
          </div>
          <div className={`flex items-center justify-center relative shrink-0 ${isVariant2 ? "h-[26.813px] w-[26.238px]" : "h-[35.066px] w-[34.885px]"}`}>
            <div className={`flex-none ${isVariant2 ? "rotate-[-2.84deg]" : "rotate-[-32.8deg]"}`}>
              <div className="h-[25.606px] relative w-[25px]" data-name="Scroll Down Icon">
                <div className="absolute contents left-0 right-0 top-0">
                  <div className="absolute aspect-[25/25] left-0 right-0 top-0">
                    <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 25 25" width="25">
                      <circle cx="12.5" cy="12.5" fill="#222222" id="Ellipse 29" r="12.5" />
                    </svg>
                  </div>
                  <div className={`absolute flex items-center justify-center ${isVariant2 ? "aspect-[19.014640124945792/19.014640124945792] left-[2.8px] right-[3.19px] top-[3.8px]" : "aspect-[24.068358943072155/24.068358943072155] left-[0.27px] right-[0.66px] top-[1.27px]"}`} style={{ containerType: "size" }}>
                    <div className={`flex-none ${isVariant2 ? "h-[hypot(-5.12767cqw,99.6869cqh)] rotate-[2.94deg] w-[hypot(99.6869cqw,5.12767cqh)]" : "h-[hypot(-37.5645cqw,80.4676cqh)] rotate-[25.02deg] w-[hypot(80.4676cqw,37.5645cqh)]"}`}>
                      {property1 === "Scroll Down Btn - Default" && (
                        <div className="overflow-clip relative size-full" data-name="ph:read-cv-logo-light">
                          <div className="absolute inset-[7.04%_13.3%_7.02%_13.3%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="15.5623" preserveAspectRatio="none" viewBox="0 0 13.2929 15.5623" width="13.2929">
                              <path d={svgPaths.p364ef080} fill="#DEDEDE" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isVariant2 && (
                        <div className="overflow-clip relative size-full" data-name="mynaui:download">
                          <div className="absolute inset-[18.75%_16.67%_16.67%_16.67%]" data-name="Vector">
                            <div className="absolute inset-[-4.84%_-4.69%]">
                              <svg className="block size-full" fill="none" height="12.8267" preserveAspectRatio="none" viewBox="0 0 13.204 12.8267" width="13.204">
                                <path d={svgPaths.p3b3fc000} id="Vector" stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13177" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute contents inset-[20.19%_-11.05%_-11.05%_10.1%]" data-name="Group">
                            <div className="absolute contents inset-[20.19%_-11.05%_-11.05%_10.1%]" data-name="Group">
                              <div className="absolute inset-[65.62%_-11.05%_-11.05%_10.1%]" data-name="Vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="8.2269" preserveAspectRatio="none" viewBox="0 0 18.282 8.2269" width="18.282">
                                  <path clipRule="evenodd" d={svgPaths.p255d8c00} fill="#DEDEDE" fillRule="evenodd" id="Vector" />
                                </svg>
                              </div>
                              <div className="absolute inset-[20.19%_9.13%_14.19%_35.29%]" data-name="Vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="11.8832" preserveAspectRatio="none" viewBox="0 0 10.0641 11.8832" width="10.0641">
                                  <path clipRule="evenodd" d={svgPaths.p257f6200} fill="#DEDEDE" fillRule="evenodd" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ScrollDownProps = {
  className?: string;
  property1?: "Scroll Down Btn - Active" | "Scroll Down Btn - Default";
};

function ScrollDown({ className, property1 = "Scroll Down Btn - Default" }: ScrollDownProps) {
  const isScrollDownBtnActive = property1 === "Scroll Down Btn - Active";
  return (
    <div className={className || `h-[60px] relative rounded-[255px] w-[200px] ${isScrollDownBtnActive ? "bg-[#dedede] drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.15)]" : "bg-[#e9e9e9]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Aeonik:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
            <p className="leading-[18px]">Scroll Down</p>
          </div>
          {property1 === "Scroll Down Btn - Default" && (
            <div className="h-[25.606px] relative shrink-0 w-[25px]" data-name="Scroll Down Icon">
              <div className="absolute contents left-0 right-0 top-0">
                <div className="absolute aspect-[25/25] left-0 right-0 top-0">
                  <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 25 25" width="25">
                    <circle cx="12.5" cy="12.5" fill="#222222" id="Ellipse 29" r="12.5" />
                  </svg>
                </div>
                <div className="absolute aspect-[24.605997309627924/24.605997309627924] flex items-center justify-center left-0 right-[0.39px] top-px" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(35.5786cqw,64.4214cqh)] rotate-[-28.91deg] w-[hypot(64.4214cqw,-35.5786cqh)]">
                    <div className="overflow-clip relative size-full" data-name="line-md:arrow-down">
                      <div className="absolute contents inset-[12.5%_20.83%]" data-name="Group">
                        <div className="absolute bottom-[14.58%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
                          <div className="absolute inset-[-7.57%_-1px]">
                            <svg className="block size-full" fill="none" height="15.204" preserveAspectRatio="none" viewBox="0 0 2 15.204" width="2">
                              <path d="M1 1V14.204" id="Vector" stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[58.33%_20.83%_12.5%_20.83%]" data-name="Vector">
                          <div className="absolute inset-[-18.93%_-9.47%]">
                            <svg className="block size-full" fill="none" height="7.2816" preserveAspectRatio="none" viewBox="0 0 12.5632 7.2816" width="12.5632">
                              <path d="M11.5632 1L6.2816 6.2816L1 1" id="Vector" stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isScrollDownBtnActive && (
            <div className="flex h-[34.513px] items-center justify-center relative shrink-0 w-[34.277px]">
              <div className="flex-none rotate-[28.98deg]">
                <div className="h-[25.606px] relative w-[25px]" data-name="Scroll Down Icon">
                  <div className="absolute contents left-0 right-0 top-0">
                    <div className="absolute aspect-[25/25] left-0 right-0 top-0">
                      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 25 25" width="25">
                        <circle cx="12.5" cy="12.5" fill="#222222" id="Ellipse 29" r="12.5" />
                      </svg>
                    </div>
                    <div className="absolute aspect-[24.605997309627924/24.605997309627924] flex items-center justify-center left-0 right-[0.39px] top-px" style={{ containerType: "size" }}>
                      <div className="flex-none h-[hypot(48.2834cqw,87.4256cqh)] rotate-[-28.91deg] w-[hypot(87.4256cqw,-48.2834cqh)]">
                        <div className="overflow-clip relative size-full" data-name="line-md:arrow-down">
                          <div className="absolute contents inset-[12.5%_20.83%]" data-name="Group">
                            <div className="absolute bottom-[14.58%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
                              <div className="absolute inset-[-7.57%_-1px]">
                                <svg className="block size-full" fill="none" height="15.204" preserveAspectRatio="none" viewBox="0 0 2 15.204" width="2">
                                  <path d="M1 1V14.204" id="Vector" stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[58.33%_20.83%_12.5%_20.83%]" data-name="Vector">
                              <div className="absolute inset-[-18.93%_-9.47%]">
                                <svg className="block size-full" fill="none" height="7.2816" preserveAspectRatio="none" viewBox="0 0 12.5632 7.2816" width="12.5632">
                                  <path d="M11.5632 1L6.2816 6.2816L1 1" id="Vector" stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="absolute contents left-[calc(40%+53px)] top-[calc(14.29%+57.71px)]" data-name="Description">
      <p className="[word-break:break-word] absolute font-['Aeonik:Light',sans-serif] h-[159px] leading-[40px] left-[calc(40%+53px)] not-italic text-[18px] text-black text-justify top-[calc(14.29%+57.71px)] w-[731px]">I specialize in web design and front-end development, crafting visually appealing and intuitive digital experiences. Beyond creating beautiful user interfaces, I also have strong capabilities in back-end coding. This versatile skill set allows me to build and deliver complete, end-to-end web solutions.</p>
    </div>
  );
}

function AboutMeH() {
  return (
    <div className="[word-break:break-word] absolute contents left-[119px] not-italic text-black top-[74px]" data-name="About Me - H1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] left-[119px] text-[128px] top-[204px] w-[429px]">
        <p className="leading-[130px]">About Me</p>
      </div>
      <p className="absolute font-['Aeonik:Light',sans-serif] leading-[40px] left-[119px] text-[40px] text-justify top-[calc(28.57%+61.43px)] w-[363px]">A Passionate Crafter of Masterpieces.</p>
    </div>
  );
}

function SchoolDescription() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(40%+41px)] not-italic text-black top-[calc(42.86%+43.14px)]" data-name="School / Description">
      <p className="absolute font-['Aeonik:Light',sans-serif] leading-[40px] left-[calc(40%+94px)] text-[18px] text-justify top-[calc(42.86%+43.14px)] whitespace-nowrap">2023 - 2027</p>
      <div className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[0] left-[calc(40%+144px)] text-[18px] text-center top-[calc(42.86%+76.14px)] w-[194px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Bachelor Degree of `}</p>
        <p className="leading-[20px]">Information Technology</p>
      </div>
      <p className="absolute font-['Aeonik:Light',sans-serif] leading-[20px] left-[calc(40%+41px)] text-[15px] text-justify top-[calc(57.14%-3.14px)] w-[207px]">As a BSIT student, I am constantly deepening my specialized knowledge of IT to build better digital experiences.</p>
      <p className="absolute font-['Aeonik:Thin',sans-serif] leading-[20px] left-[calc(40%+73px)] text-[12px] text-justify top-[calc(42.86%+117.14px)] whitespace-nowrap">University of Nueva Caceres</p>
    </div>
  );
}

function SchoolDescription1() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(60%+13px)] not-italic text-black top-[calc(42.86%+43.14px)]" data-name="School / Description">
      <p className="-translate-x-1/2 absolute font-['Aeonik:Light',sans-serif] leading-[40px] left-[calc(60%+116px)] text-[18px] text-center top-[calc(42.86%+43.14px)] whitespace-nowrap">2018 - 2020</p>
      <div className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[0] left-[calc(60%+116px)] text-[18px] text-center top-[calc(42.86%+76.14px)] w-[194px]">
        <p className="leading-[20px] mb-0">Computer System</p>
        <p className="leading-[20px]">Servicing</p>
      </div>
      <p className="absolute font-['Aeonik:Light',sans-serif] leading-[20px] left-[calc(60%+13px)] text-[15px] text-justify top-[calc(57.14%-9.14px)] w-[207px]">I have practical training in Computer Systems Servicing, giving me a well-rounded understanding of both hardware and software.</p>
      <p className="absolute font-['Aeonik:Thin',sans-serif] leading-[20px] left-[calc(60%+24px)] text-[12px] text-justify top-[calc(42.86%+117.14px)] whitespace-nowrap">Camarines Sur National High School</p>
    </div>
  );
}

function SchoolDescription2() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(80%-15px)] not-italic text-black top-[calc(42.86%+43.14px)]" data-name="School / Description">
      <p className="-translate-x-1/2 absolute font-['Aeonik:Light',sans-serif] leading-[40px] left-[calc(80%+88px)] text-[18px] text-center top-[calc(42.86%+43.14px)] whitespace-nowrap">2014 - 2020</p>
      <div className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[0] left-[calc(80%+88px)] text-[18px] text-center top-[calc(42.86%+76.14px)] w-[194px]">
        <p className="leading-[20px] mb-0">Basic Education -</p>
        <p className="leading-[20px]">High School</p>
      </div>
      <p className="absolute font-['Aeonik:Light',sans-serif] leading-[20px] left-[calc(80%-15px)] text-[15px] text-justify top-[calc(57.14%-9.14px)] w-[207px]">My academic background includes completing my basic high school education before pursuing my degree in Information Technology.</p>
      <p className="absolute font-['Aeonik:Thin',sans-serif] leading-[20px] left-[calc(80%-4px)] text-[12px] text-justify top-[calc(42.86%+117.14px)] whitespace-nowrap">Camarines Sur National High School</p>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="absolute bg-[#d6d6d6] h-[1024px] left-0 overflow-clip top-[1024px] w-[1440px]" data-name="About Me">
      <Description />
      <AboutMeH />
      <div className="absolute h-0 left-[119px] top-[calc(42.86%+37.14px)] w-[1246px]">
        <div className="absolute inset-[-0.25px_0_0_0]">
          <svg className="block size-full" fill="none" height="0.25" preserveAspectRatio="none" viewBox="0 0 1246 0.25" width="1246">
            <line id="Line 2" stroke="black" strokeWidth="0.25" x2="1246" y1="0.125" y2="0.125" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[119px] top-[calc(57.14%+111.86px)] w-[1246px]">
        <div className="absolute inset-[-0.25px_0_0_0]">
          <svg className="block size-full" fill="none" height="0.25" preserveAspectRatio="none" viewBox="0 0 1246 0.25" width="1246">
            <line id="Line 2" stroke="black" strokeWidth="0.25" x2="1246" y1="0.125" y2="0.125" />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(40%+138px)] size-[13px] top-[calc(42.86%+30.14px)]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[13px]">
            <div className="absolute inset-[-7.69%]">
              <svg className="block size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                <circle cx="7.5" cy="7.5" fill="#222222" id="Ellipse 33" r="7" stroke="#DEDEDE" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(60%+110px)] size-[13px] top-[calc(42.86%+30.14px)]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[13px]">
            <div className="absolute inset-[-7.69%]">
              <svg className="block size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                <circle cx="7.5" cy="7.5" fill="#222222" id="Ellipse 33" r="7" stroke="#DEDEDE" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(80%+82px)] size-[13px] top-[calc(42.86%+30.14px)]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[13px]">
            <div className="absolute inset-[-7.69%]">
              <svg className="block size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                <circle cx="7.5" cy="7.5" fill="#222222" id="Ellipse 33" r="7" stroke="#DEDEDE" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <SchoolDescription />
      <SchoolDescription1 />
      <SchoolDescription2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] leading-[20px] left-[calc(40%+152px)] not-italic text-[25px] text-black text-center top-[calc(28.57%+133.43px)] whitespace-nowrap">{`Education & Skills`}</p>
      <div className="absolute left-[calc(40%+21px)] size-[268px] top-[calc(71.43%-13.43px)]">
        <svg className="absolute block inset-0 size-full" fill="none" height="268" preserveAspectRatio="none" viewBox="0 0 268 268" width="268">
          <circle cx="134" cy="134" fill="#222222" id="Ellipse 36" r="134" />
        </svg>
      </div>
      <div className="absolute left-[calc(60%-16px)] size-[268px] top-[calc(71.43%-13.43px)]">
        <div className="absolute inset-[-3.73%]">
          <svg className="block size-full" fill="none" height="288" preserveAspectRatio="none" viewBox="0 0 288 288" width="288">
            <circle cx="144" cy="144" fill="#222222" id="Ellipse 37" r="139" stroke="#D6D6D6" strokeWidth="10" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(60%+235px)] size-[268px] top-[calc(71.43%-13.43px)]">
        <div className="absolute inset-[-3.73%]">
          <svg className="block size-full" fill="none" height="288" preserveAspectRatio="none" viewBox="0 0 288 288" width="288">
            <circle cx="144" cy="144" fill="#222222" id="Ellipse 37" r="139" stroke="#D6D6D6" strokeWidth="10" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Bold',sans-serif] h-[63px] leading-[50px] left-[calc(40%+155.5px)] not-italic text-[#d6d6d6] text-[90px] text-center top-[calc(71.43%+34.57px)] w-[185px]">Desi</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Bold',sans-serif] h-[63px] leading-[50px] left-[calc(40%+146.5px)] not-italic text-[#d6d6d6] text-[90px] text-center top-[calc(71.43%+101.57px)] w-[251px]">gning</p>
      <div className="-translate-x-1/2 absolute flex h-[87.117px] items-center justify-center left-[calc(60%+110.17px)] top-[calc(71.43%+9.57px)] w-[224.347px]">
        <div className="flex-none rotate-[-9.96deg]">
          <p className="[word-break:break-word] font-['Aeonik:Bold',sans-serif] leading-[50px] not-italic relative text-[#d6d6d6] text-[70px] text-center whitespace-nowrap">Progra</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[92.823px] items-center justify-center left-[calc(40%+394.42px)] top-[calc(71.43%+86.57px)] w-[256.85px]">
        <div className="flex-none rotate-[-9.96deg]">
          <p className="[word-break:break-word] font-['Aeonik:Bold',sans-serif] leading-[50px] not-italic relative text-[#d6d6d6] text-[78px] text-center whitespace-nowrap">mming</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[104.691px] items-center justify-center left-[calc(80%+86.68px)] top-[calc(71.43%+13.57px)] w-[235.99px]">
        <div className="flex-none rotate-[7.79deg]">
          <p className="[word-break:break-word] font-['Aeonik:Bold',sans-serif] h-[74.484px] leading-[50px] not-italic relative text-[#d6d6d6] text-[100px] text-center w-[228px]">Multi</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[82.872px] items-center justify-center left-[calc(80%+81.16px)] top-[calc(71.43%+99.93px)] w-[250.506px]">
        <div className="flex-none rotate-[7.79deg]">
          <p className="[word-break:break-word] font-['Aeonik:Bold',sans-serif] leading-[50px] not-italic relative text-[#d6d6d6] text-[85px] text-center whitespace-nowrap">Media</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[667.839px] left-[calc(40%+43px)] top-[calc(28.57%+20.43px)] w-[803px]">
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

function Group5() {
  return (
    <div className="absolute h-[52.396px] left-0 top-0 w-[63px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="52.3959" preserveAspectRatio="none" viewBox="0 0 63 52.3959" width="63">
        <g id="Group 29">
          <path d={svgPaths.p39fc8400} fill="#1B1B1B" id="Ellipse 28" />
          <path d={svgPaths.p2f623080} fill="#7B7B7B" id="Ellipse 25" />
          <path d={svgPaths.p1583ce00} fill="#7B7B7B" id="Ellipse 26" />
          <path d={svgPaths.pe718300} fill="#7B7B7B" id="Rectangle 3" />
          <ellipse cx="42.199" cy="29.5415" fill="#1B1B1B" id="Ellipse 27" rx="9.87043" ry="9.47559" />
        </g>
      </svg>
    </div>
  );
}

function Projects1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 whitespace-nowrap" data-name="Projects">
      <div className="col-1 flex flex-col justify-center ml-[28px] mt-0 relative row-1 text-[96px]">
        <p className="leading-[100px]">10</p>
      </div>
      <div className="col-1 flex flex-col justify-center ml-0 mt-[4px] relative row-1 text-[50px] text-center">
        <p className="leading-[55px]">+</p>
      </div>
    </div>
  );
}

function ProjectCompleted() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] items-start leading-[0] left-[151px] not-italic text-black top-[calc(14.29%+78.71px)] w-[167px]" data-name="Project Completed">
      <Projects1 />
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[20px] text-center w-[min-content]">
        <p className="leading-[25px]">Project Completed</p>
      </div>
    </div>
  );
}

function Years() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 whitespace-nowrap" data-name="Years">
      <div className="col-1 flex flex-col justify-center ml-[28px] mt-0 relative row-1 text-[96px]">
        <p className="leading-[100px]">10</p>
      </div>
      <div className="col-1 flex flex-col justify-center ml-0 mt-[4px] relative row-1 text-[50px] text-center">
        <p className="leading-[55px]">+</p>
      </div>
    </div>
  );
}

function ProjectCompleted1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] items-start justify-end leading-[0] left-[calc(20%+109px)] not-italic text-black top-[calc(14.29%+78.71px)] w-[185px]" data-name="Project Completed">
      <Years />
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[20px] text-center w-[min-content]">
        <p className="leading-[25px]">Years of Experience</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[1024px] left-0 overflow-clip top-0 w-[1440px]" data-name="HEADER">
      <Group1 />
      <div className="absolute h-[56px] left-[120px] overflow-clip top-[70px] w-[67px]" data-name="GREY">
        <Group5 />
      </div>
      <div className="absolute h-[40px] left-[230px] top-[81px] w-[500px]" data-name="ffff">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch cursor-pointer flex gap-[30px] items-center p-[5px] relative size-full">
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="About Me">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">About Me</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="Component 1">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">Services</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="Component 2">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">Projects</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="Portfolio">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">Portfolio</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <ProjectCompleted />
      <ProjectCompleted1 />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Aeonik:Light',sans-serif] h-[296px] justify-center leading-[0] left-[362px] not-italic text-[200px] text-black text-center top-[calc(28.57%+219.43px)] w-[558px]">
        <p className="leading-[200px]">Hola!</p>
      </div>
      <div className="absolute h-[799px] left-[calc(40%+49px)] top-[calc(14.29%+78.71px)] w-[792px]" data-name="PICS 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[132.17%] left-0 max-w-none top-[-23.78%] w-full" src={imgPics1} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Aeonik:Light',sans-serif] justify-center leading-[0] left-[248px] not-italic text-[15px] text-black text-center top-[calc(57.14%+29.86px)] whitespace-nowrap">
        <p className="leading-[18px]">It’s Daryl Bo a Programmer</p>
      </div>
      <ScrollDown className="absolute bg-[#e9e9e9] cursor-pointer h-[60px] left-[161px] rounded-[255px] top-[calc(85.71%-9.71px)] w-[200px]" />
      <Cv className="absolute bg-[#e9e9e9] h-[60px] left-[calc(80%-10px)] rounded-[255px] top-[77px] w-[200px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[145px] leading-[130px] left-1/2 not-italic text-[200px] text-black text-center top-0 w-[180px]">i</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[145px] left-[31px] overflow-clip top-[calc(57.14%+56.86px)] w-[180px]">
      <Group7 />
    </div>
  );
}

function Group3() {
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

function Portfolio() {
  return (
    <div className="absolute bg-[#d6d6d6] h-[1024px] left-0 overflow-clip top-[2048px] w-[1440px]" data-name="Portfolio">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] leading-[130px] left-[calc(10%+136px)] not-italic text-[200px] text-black text-center top-[calc(42.86%+73.14px)] w-[402px] whitespace-pre-wrap">{`Serv   `}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[145px] leading-[130px] left-[calc(30%-74px)] not-italic text-[200px] text-black text-center top-[calc(57.14%+56.86px)] w-[212px]">es</p>
      <Frame />
      <Group3 />
      <UiUxDescription />
      <FbProgrammingDesc />
      <FbProgrammingDesc1 />
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(80%-41.25px)] size-[400.499px] top-[-97.25px]">
      <div className="flex-none rotate-[6.87deg]">
        <div className="relative size-[360px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="360.001" preserveAspectRatio="none" viewBox="0 0 360 360.001" width="360">
            <g id="Group 26">
              <path d={svgPaths.p57f4240} fill="#1B1B1B" id="Ellipse 26" />
              <ellipse cx="180.87" cy="182.4" fill="#7B7B7B" id="Ellipse 27" rx="85" ry="81.6" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[491.523px] left-0 top-[calc(71.43%+21.57px)] w-[591px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="491.523" preserveAspectRatio="none" viewBox="0 0 591.001 491.523" width="591.001">
        <g id="Group 25">
          <path d={svgPaths.p1e0cc900} fill="#7B7B7B" id="Ellipse 28" />
          <path d={svgPaths.p2b1ac400} fill="#1B1B1B" id="Ellipse 25" />
          <path d={svgPaths.pc496e00} fill="#1B1B1B" id="Ellipse 26" />
          <path d={svgPaths.p1cea3380} fill="#1B1B1B" id="Rectangle 3" />
          <ellipse cx="395.866" cy="277.128" fill="#7B7B7B" id="Ellipse 27" rx="92.594" ry="88.8901" />
        </g>
      </svg>
    </div>
  );
}

function Projects2() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[1024px] left-1/2 overflow-clip top-[2976px] w-[1440px]" data-name="Projects">
      <Group2 />
      <Projects className="-translate-x-1/2 absolute h-[753px] left-1/2 overflow-clip top-[calc(14.29%+41.71px)] w-[1070px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] leading-[130px] left-1/2 not-italic text-[128px] text-black text-center top-[calc(7.14%-29.14px)] whitespace-nowrap">Projects</p>
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[491.523px] left-0 top-[-270px] w-[591px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="491.523" preserveAspectRatio="none" viewBox="0 0 591.001 491.523" width="591.001">
        <g id="Group 25">
          <path d={svgPaths.p1e0cc900} fill="#7B7B7B" id="Ellipse 28" />
          <path d={svgPaths.p2b1ac400} fill="#1B1B1B" id="Ellipse 25" />
          <path d={svgPaths.pc496e00} fill="#1B1B1B" id="Ellipse 26" />
          <path d={svgPaths.p1cea3380} fill="#1B1B1B" id="Rectangle 3" />
          <ellipse cx="395.866" cy="277.128" fill="#7B7B7B" id="Ellipse 27" rx="92.594" ry="88.8901" />
        </g>
      </svg>
    </div>
  );
}

function Year() {
  return (
    <div className="absolute bg-[#222] content-stretch flex h-[15px] items-center justify-center left-[22px] rounded-[5px] top-0 w-[50px]" data-name="Year">
      <p className="[word-break:break-word] font-['Aeonik:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">2026</p>
    </div>
  );
}

function CertificateName() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[12px] left-[22px] not-italic text-[10px] text-black text-center top-[23px]" data-name="Certificate Name">
      <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] left-[52.5px] top-[23px] whitespace-nowrap">Git for Teams</p>
      <p className="-translate-x-1/2 absolute font-['Aeonik:Thin',sans-serif] left-[111.5px] top-[23px] whitespace-pre">{`-  LinkedIn`}</p>
    </div>
  );
}

function Description1() {
  return (
    <div className="absolute h-[36px] left-[22px] top-[40px] w-[260px]" data-name="Description">
      <p className="[word-break:break-word] absolute font-['Aeonik:Light',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-black top-0 w-[260px]">We learned how to use Git commands to ensure a version control to our system and to make sure all team members havess to the project</p>
    </div>
  );
}

function Certificate() {
  return (
    <div className="absolute h-[76px] left-[calc(40%+83px)] top-[calc(14.29%+96.71px)] w-[282px]" data-name="Certificate 1">
      <div className="absolute left-0 size-[10px] top-[3px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#222222" id="Ellipse 39" r="5" />
        </svg>
      </div>
      <Year />
      <CertificateName />
      <Description1 />
    </div>
  );
}

function Year1() {
  return (
    <div className="absolute bg-[#222] content-stretch flex h-[15px] items-center justify-center left-[22px] rounded-[5px] top-0 w-[50px]" data-name="Year">
      <p className="[word-break:break-word] font-['Aeonik:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">2025</p>
    </div>
  );
}

function CertificateName1() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[12px] left-[22px] not-italic text-[10px] text-black text-center top-[22px]" data-name="Certificate Name">
      <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] left-[94px] top-[22px] whitespace-nowrap">CCNA Introduction to Networks</p>
      <p className="-translate-x-1/2 absolute font-['Aeonik:Thin',sans-serif] left-[193.5px] top-[22px] whitespace-pre">{`-  LinkedIn`}</p>
    </div>
  );
}

function Description2() {
  return (
    <div className="absolute h-[36px] left-[22px] top-[40px] w-[260px]" data-name="Description">
      <p className="[word-break:break-word] absolute font-['Aeonik:Light',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-black top-0 w-[260px]">Here we build our networking skills and get ready for CCNA certification and associate level jobs.</p>
    </div>
  );
}

function Certificate2() {
  return (
    <div className="absolute h-[76px] left-[calc(60%+139px)] top-[calc(14.29%+96.71px)] w-[282px]" data-name="Certificate 3">
      <div className="absolute left-0 size-[10px] top-[3px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#222222" id="Ellipse 39" r="5" />
        </svg>
      </div>
      <Year1 />
      <CertificateName1 />
      <Description2 />
    </div>
  );
}

function Year2() {
  return (
    <div className="absolute bg-[#222] content-stretch flex h-[15px] items-center justify-center left-[22px] rounded-[5px] top-0 w-[50px]" data-name="Year">
      <p className="[word-break:break-word] font-['Aeonik:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">2025</p>
    </div>
  );
}

function CertificateName2() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[12px] left-[22px] not-italic text-[10px] text-black text-center top-[23px]" data-name="Certificate Name">
      <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] left-[69.5px] top-[23px] whitespace-nowrap">JavaScript Essentials</p>
      <p className="-translate-x-1/2 absolute font-['Aeonik:Thin',sans-serif] left-[159.5px] top-[23px] whitespace-pre">{`-  CCNA & CCNP`}</p>
    </div>
  );
}

function Description3() {
  return (
    <div className="absolute h-[36px] left-[22px] top-[40px] w-[260px]" data-name="Description">
      <p className="[word-break:break-word] absolute font-['Aeonik:Light',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-black top-0 w-[260px]">Design, Develop, and improve JavaScript programs. Boost our programming skills to start our career in technology.</p>
    </div>
  );
}

function Certificate1() {
  return (
    <div className="absolute h-[76px] left-[calc(40%+83px)] top-[calc(28.57%+59.43px)] w-[282px]" data-name="Certificate 2">
      <div className="absolute left-0 size-[10px] top-[3px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#222222" id="Ellipse 39" r="5" />
        </svg>
      </div>
      <Year2 />
      <CertificateName2 />
      <Description3 />
    </div>
  );
}

function Year3() {
  return (
    <div className="absolute bg-[#222] content-stretch flex h-[15px] items-center justify-center left-[22px] rounded-[5px] top-0 w-[50px]" data-name="Year">
      <p className="[word-break:break-word] font-['Aeonik:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">2024</p>
    </div>
  );
}

function CertificateName3() {
  return (
    <div className="absolute contents left-[22px] top-[23px]" data-name="Certificate Name">
      <p className="[word-break:break-word] absolute font-['Aeonik:Medium',sans-serif] leading-[12px] left-[22px] not-italic text-[10px] text-black top-[23px] whitespace-nowrap">Networking Devices and Initial Configuration</p>
    </div>
  );
}

function Description4() {
  return (
    <div className="absolute h-[36px] left-[22px] top-[40px] w-[260px]" data-name="Description">
      <p className="[word-break:break-word] absolute font-['Aeonik:Light',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-black top-0 w-[260px]">For network essentials and build our foundational skills on network engineering.</p>
    </div>
  );
}

function Certificate3() {
  return (
    <div className="absolute h-[76px] left-[calc(60%+139px)] top-[calc(28.57%+59.43px)] w-[307px]" data-name="Certificate 4">
      <div className="absolute left-0 size-[10px] top-[3px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#222222" id="Ellipse 39" r="5" />
        </svg>
      </div>
      <Year3 />
      <CertificateName3 />
      <Description4 />
    </div>
  );
}

function Description5() {
  return (
    <div className="[word-break:break-word] absolute contents left-[17px] not-italic text-[#fefefe] top-[278px]" data-name="Description">
      <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[26px] left-[137px] text-[24px] text-center top-[278px] whitespace-nowrap">Hackathon Champion</p>
      <div className="absolute font-['Aeonik:Light',sans-serif] leading-[0] left-[17px] text-[16px] top-[304px] w-[358px] whitespace-pre-wrap">
        <p className="leading-[26px] mb-0">{`We develop and propose a offline SOS for flood. `}</p>
        <p className="leading-[26px]">For bridging the critical gaps between residents and responder</p>
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <div className="absolute drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.25)] h-[398px] left-[97px] top-[calc(42.86%+106.14px)] w-[392px]" data-name="ACHIEVEMENTS 1">
      <div className="absolute bg-[#222] h-[241px] left-0 rounded-[10px] top-[157px] w-[392px]" />
      <div className="absolute h-[259px] left-0 rounded-[10px] top-0 w-[392px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[151.35%] left-[-0.02%] max-w-none top-[-35.05%] w-full" src={imgRectangle20} />
        </div>
      </div>
      <Description5 />
    </div>
  );
}

function Description6() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[26px] left-[17px] not-italic text-[#fefefe] top-[278px]" data-name="Description">
      <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] left-[108px] text-[24px] text-center top-[278px] whitespace-nowrap">Gawad Unceano</p>
      <p className="absolute font-['Aeonik:Light',sans-serif] left-[17px] text-[16px] top-[304px] w-[358px]">Receiving the Gawad Unceano was a significant milestone that recognized my academic dedication and technical excellence during my university years.</p>
    </div>
  );
}

function Achievements1() {
  return (
    <div className="absolute drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.25)] h-[398px] left-[calc(20%+222px)] top-[calc(42.86%+106.14px)] w-[392px]" data-name="ACHIEVEMENTS 2">
      <div className="absolute bg-[#222] h-[241px] left-0 rounded-[10px] top-[157px] w-[392px]" />
      <div className="absolute h-[259px] left-0 rounded-[10px] top-0 w-[392px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[10px] size-full" src={imgRectangle21} />
      </div>
      <Description6 />
    </div>
  );
}

function Description7() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[26px] left-[17px] not-italic text-[#fefefe] top-[278px]" data-name="Description">
      <p className="absolute font-['Aeonik:Medium',sans-serif] left-[18px] text-[24px] top-[278px] whitespace-nowrap">Idea2StartUp Participant</p>
      <p className="absolute font-['Aeonik:Light',sans-serif] left-[17px] text-[16px] top-[304px] w-[358px]">Participating in the Idea2Startup + Bloomberg Challenge allowed me to apply my software and IT skills to solve critical real-world problems.</p>
    </div>
  );
}

function Achievements2() {
  return (
    <div className="absolute drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.25)] h-[398px] left-[calc(60%+59px)] top-[calc(42.86%+106.14px)] w-[392px]" data-name="ACHIEVEMENTS 3">
      <div className="absolute bg-[#222] h-[241px] left-0 rounded-[10px] top-[157px] w-[392px]" />
      <div className="absolute h-[259px] left-0 rounded-[10px] top-0 w-[392px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[151.35%] left-[-0.02%] max-w-none top-[-35.05%] w-full" src={imgRectangle22} />
        </div>
      </div>
      <Description7 />
    </div>
  );
}

function Portfolio1() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[1024px] left-1/2 overflow-clip top-[4000px] w-[1440px]" data-name="Portfolio">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] leading-[130px] left-[calc(10%+145px)] not-italic text-[100px] text-black text-center top-[calc(21.43%+8.57px)] w-[392px]">Portfolio</p>
      <p className="[word-break:break-word] absolute font-['Aeonik:Regular',sans-serif] h-[55px] leading-[0] left-[calc(40%+81px)] not-italic text-[0px] text-black text-justify top-[94px] w-[692px]">
        <span className="leading-[18px] text-[16px]">{`During my `}</span>
        <span className="font-['Aeonik:Bold',sans-serif] leading-[18px] text-[16px]">3+</span>
        <span className="leading-[18px] text-[16px]">{` at the university, I achieved multiple academic milestones while honing my skills in mobile and web app development and design. Alongside my software creation abilities, I also gained hands-on expertise in system troubleshooting and basic networking.`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Aeonik:Medium',sans-serif] leading-[35px] left-[97px] not-italic text-[32px] text-black text-justify top-[calc(42.86%+53.14px)] whitespace-nowrap">Achievements</p>
      <p className="[word-break:break-word] absolute font-['Aeonik:Medium',sans-serif] leading-[35px] left-[calc(40%+81px)] not-italic text-[32px] text-black text-justify top-[calc(14.29%+27.71px)] whitespace-nowrap">Certificates</p>
      <Group6 />
      <div className="absolute flex h-[279px] items-center justify-center left-[calc(40%+87px)] top-[calc(14.29%+66.71px)] w-px">
        <div className="flex-none rotate-[90.21deg]">
          <div className="h-0 relative w-[279.002px]">
            <div className="absolute inset-[-0.25px_0_0_0]">
              <svg className="block size-full" fill="none" height="0.25" preserveAspectRatio="none" viewBox="0 0 279.002 0.25" width="279.002">
                <line id="Line 4" stroke="black" strokeWidth="0.25" x2="279.002" y1="0.125" y2="0.125" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[279px] items-center justify-center left-[calc(60%+143px)] top-[calc(14.29%+66.71px)] w-px">
        <div className="flex-none rotate-[90.21deg]">
          <div className="h-0 relative w-[279.002px]">
            <div className="absolute inset-[-0.25px_0_0_0]">
              <svg className="block size-full" fill="none" height="0.25" preserveAspectRatio="none" viewBox="0 0 279.002 0.25" width="279.002">
                <line id="Line 4" stroke="black" strokeWidth="0.25" x2="279.002" y1="0.125" y2="0.125" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Certificate />
      <Certificate2 />
      <Certificate1 />
      <Certificate3 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Thin',sans-serif] leading-[12px] left-[calc(80%+117.5px)] not-italic text-[10px] text-black text-center top-[calc(28.57%+82.43px)] whitespace-pre">{`-  CCNA & CCNP`}</p>
      <Achievements />
      <Achievements1 />
      <Achievements2 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[52.396px] left-0 top-0 w-[63px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="52.3959" preserveAspectRatio="none" viewBox="0 0 63 52.3959" width="63">
        <g id="Group 29">
          <path d={svgPaths.p39fc8400} fill="#1B1B1B" id="Ellipse 28" />
          <path d={svgPaths.p2f623080} fill="#7B7B7B" id="Ellipse 25" />
          <path d={svgPaths.p1583ce00} fill="#7B7B7B" id="Ellipse 26" />
          <path d={svgPaths.pe718300} fill="#7B7B7B" id="Rectangle 3" />
          <ellipse cx="42.199" cy="29.5415" fill="#1B1B1B" id="Ellipse 27" rx="9.87043" ry="9.47559" />
        </g>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#222] h-[289px] left-1/2 overflow-clip top-[5336px] w-[1440px]" data-name="Footer">
      <div className="absolute border border-[#dedede] border-solid h-[194px] left-[-101px] rounded-[10px] top-[-97px] w-[202px]" />
      <div className="absolute border border-[#dedede] border-solid h-[301px] left-[33px] rounded-[10px] top-[108px] w-[278px]" />
      <div className="absolute border border-[#dedede] border-solid h-[194px] left-[1251px] rounded-[10px] top-[192px] w-[202px]" />
      <div className="absolute border border-[#dedede] border-solid h-[194px] left-[971px] rounded-[10px] top-[-66px] w-[202px]" />
      <div className="absolute border border-[#dedede] border-solid h-[301px] left-[1375px] rounded-[10px] top-[363px] w-[278px]" />
      <div className="absolute h-[56px] left-[221px] overflow-clip top-[117px] w-[67px]" data-name="GREY">
        <Group8 />
      </div>
      <div className="absolute h-[40px] left-[331px] top-[128px] w-[500px]" data-name="ffff">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch cursor-pointer flex gap-[30px] items-center p-[5px] relative size-full">
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="About Me">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">About Me</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="Component 1">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">Services</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="Component 2">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">Projects</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="h-[30px] relative shrink-0 w-[100px]" data-name="Portfolio">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
                    <p className="leading-[18px]">Portfolio</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Aeonik:Light',sans-serif] leading-[26px] left-[1030px] not-italic text-[24px] text-white top-[140px] whitespace-nowrap">imda.realadrian0929@gmail.com</p>
    </div>
  );
}

function Conclusion() {
  return (
    <div className="-translate-x-1/2 absolute h-[211px] left-[calc(50%+0.5px)] top-[5099px] w-[985px]" data-name="CONCLUSION">
      <p className="[word-break:break-word] absolute font-['Aeonik:Medium',sans-serif] leading-[50px] left-[calc(50%-492.5px)] not-italic text-[48px] text-black top-0 whitespace-nowrap">Have an idea? Let’s turn it into a digital reality.</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Aeonik:Thin',sans-serif] h-[50px] leading-[25px] left-1/2 not-italic text-[20px] text-black text-center top-[52px] w-[747px]">{`I am always eager to collaborate on fresh ideas and tackle exciting design or technical challenges. I can't wait to partner with you and bring your next big project to life!`}</p>
      <CallMe className="-translate-x-1/2 absolute bg-[#e9e9e9] h-[60px] left-[calc(50%-10.5px)] rounded-[255px] top-[151px] w-[200px]" />
    </div>
  );
}

export default function Overall() {
  return (
    <div className="bg-white relative size-full" data-name="OVERALL">
      <AboutMe />
      <Header />
      <Portfolio />
      <Projects2 />
      <Portfolio1 />
      <Footer />
      <Conclusion />
    </div>
  );
}