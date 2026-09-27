import imgRectangle11 from "./f0d0802b14bbd438b97bb800109e41559ae74a73.png";

function Description() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[26px] left-[17px] not-italic text-[#fefefe] top-[278px]" data-name="Description">
      <p className="absolute left-1/2 top-[278px] w-[358px] max-w-[calc(100%-34px)] -translate-x-1/2 break-words text-center font-['Aeonik:Medium',sans-serif] text-[clamp(16px,6vw,24px)] leading-tight">Gawad Unceano</p>
      <p className="absolute left-[17px] top-[304px] w-[358px] max-w-[calc(100%-34px)] break-words font-light text-[clamp(11px,4vw,16px)] leading-[1.35]">Receiving the Gawad Unceano was a significant milestone that recognized my academic dedication and technical excellence during my university years.</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.25)] relative size-full" data-name="ACHIEVEMENTS 2">
      <div className="absolute bg-[#222] h-[241px] left-0 rounded-[10px] top-[157px] w-[392px]" />
      <div className="absolute h-[259px] left-0 rounded-[10px] top-0 w-[392px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[10px] size-full" src={imgRectangle11} />
      </div>
      <Description />
    </div>
  );
}
