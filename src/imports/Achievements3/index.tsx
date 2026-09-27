import imgRectangle11 from "./1846e9b576b1a7f910101233db383075696e229b.png";

function Description() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[26px] left-[17px] not-italic text-[#fefefe] top-[278px]" data-name="Description">
      <p className="absolute left-[17px] top-[278px] w-[358px] max-w-[calc(100%-34px)] break-words font-['Aeonik:Medium',sans-serif] text-[clamp(16px,6vw,24px)] leading-tight">Idea2StartUp Participant</p>
      <p className="absolute left-[17px] top-[304px] w-[358px] max-w-[calc(100%-34px)] break-words font-light text-[clamp(9px,calc(4vw_-_2px),14px)] leading-[1.35]">Participating in the Idea2Startup + Bloomberg Challenge allowed me to apply my software and IT skills to solve critical real-world problems.</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.25)] relative size-full" data-name="ACHIEVEMENTS 3">
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
