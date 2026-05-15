import svgPaths from "./svg-5xze2d4q52";

function Group() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39fea300} fill="var(--fill-0, #0E0E0E)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3baeb000} fill="var(--fill-0, #0E0E0E)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FlowbiteDownloadSolid() {
  return (
    <div className="absolute left-[45px] overflow-clip size-[24px] top-[224px]" data-name="flowbite:download-solid">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[45px] top-[224px]">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[74px] text-[#0e0e0e] text-[16px] top-[228px]">Download CV</p>
      <FlowbiteDownloadSolid />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-[206px]">
      <div className="absolute bg-[#dac5a7] h-[60px] left-0 rounded-[8px] top-[206px] w-[230px]" />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[53px]">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[51px] text-[#dac5a7] text-[24px] top-[53px]">Saya Muhamad Nur Awaludin</p>
      <div className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[30.366px] left-0 text-[21.702px] text-white top-[106px] whitespace-nowrap">
        <p className="mb-0">{`Narasumber & Trainer · Mentor · `}</p>
        <p>Program Manager · Product Designer</p>
      </div>
      <div className="absolute h-0 left-0 top-[73px] w-[32px]">
        <div className="absolute inset-[-3.14px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 3.13786">
            <line id="Line 1" stroke="var(--stroke-0, #DAC5A7)" strokeWidth="3.13786" x2="32" y1="1.56893" y2="1.56893" />
          </svg>
        </div>
      </div>
      <Group2 />
    </div>
  );
}

export default function Group4() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[0] left-0 text-[41.128px] text-white top-0">
        <span className="leading-[43.413px]">Assalamu’alaikum</span>
        <span className="leading-[43.413px] text-[#dac5a7]">.</span>
      </p>
      <Group3 />
    </div>
  );
}