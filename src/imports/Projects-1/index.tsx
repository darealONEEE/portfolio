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

export default function Projects({ className, property1 = "DESIGN" }: ProjectsProps) {
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