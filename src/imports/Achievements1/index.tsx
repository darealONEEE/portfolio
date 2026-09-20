import imgRectangle11 from "./ffdc2ed176ba73021cacbfa5f3dc43ab454b978b.png";

function Description() {
  return (
    <div className="[word-break:break-word] absolute contents left-[17px] not-italic text-[#fefefe] top-[278px]" data-name="Description">
      <p className="absolute left-1/2 top-[278px] w-[358px] max-w-[calc(100%-34px)] -translate-x-1/2 break-words text-center font-['Aeonik:Medium',sans-serif] text-[clamp(16px,6vw,24px)] leading-tight">Hackathon Champion</p>
      <div className="absolute left-[17px] top-[304px] w-[358px] max-w-[calc(100%-34px)] break-words font-['Aeonik:Light',sans-serif] text-[clamp(11px,4vw,16px)] leading-[1.35]">
        <p className="leading-[26px] mb-0">{`We develop and propose a offline SOS for flood. `}</p>
        <p className="leading-[26px]">For bridging the critical gaps between residents and responder</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.25)] relative size-full" data-name="ACHIEVEMENTS 1">
      <div className="absolute bg-[#222] h-[241px] left-0 rounded-[10px] top-[157px] w-[392px]" />
      <div className="absolute h-[259px] left-0 rounded-[10px] top-0 w-[392px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[151.35%] left-[-0.02%] max-w-none top-[-35.05%] w-full" src={imgRectangle11} />
        </div>
      </div>
      <Description />
    </div>
  );
}
