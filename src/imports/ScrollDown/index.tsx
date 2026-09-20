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

export default function ScrollDown1() {
  return <ScrollDown className="bg-[#e9e9e9] relative rounded-[255px] size-full" />;
}