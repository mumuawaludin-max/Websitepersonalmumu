import { Link } from 'react-router';
import svgPaths from '../../imports/svg-udsxpecb9u';
import svgDownload from '../../imports/svg-5xze2d4q52';
import imgMumuFoto24 from "figma:asset/cad3138b6e58073d377947f640a8658afed27845.png";
import imgImage508 from "figma:asset/cbf0f6bb3e21be2084545bec155a539d3ddfb1da.png";
import imgImage2313 from "figma:asset/5c4ca3fd1d58f6da8a788049ce163ff299cd312e.png";
import imgImage2312 from "figma:asset/e1eab43ec882355ab36823e3a541f60108139389.png";
import imgImage2311 from "figma:asset/1c0d17eede30a772c0f8632a01927bd54ade42cc.png";
import imgImage2310 from "figma:asset/5e3805d7bf430488e46da8638ef81a2cb09af41a.png";
import imgImage750 from "figma:asset/8514d96a0304334b75f582a850fdfdb347da38d8.png";
import imgLogoDtSm from "figma:asset/7216371e2d2aae758da47a5cbf11282e49367735.png";
import imgImage2317 from "figma:asset/8591cec0a94d8118f54921ee0fa1979baad4b2e6.png";
import imgImage2320 from "figma:asset/7233b4317641f20f3ce89f8366450855f3b8eaeb.png";
import imgImage2321 from "figma:asset/c974224a9a4e74ae8f3bd18f42ab2cdf9b64de30.png";
import imgImage2033 from "figma:asset/dd0f19c323fd5afea38ddf9adfc6f49dd61aad60.png";
import imgImage2319 from "figma:asset/07a8ea7c74c80392e48063160447bed74d3faba8.png";
import imgImage2314 from "figma:asset/a77aca48dba9f23ff4c5d2dd7b64732c9e4509e5.png";
import imgImage2315 from "figma:asset/22cc8d6b3a10b6914fce32d96638e869bccf035f.png";
import imgImage2316 from "figma:asset/77bc1774b55b36565156de25e92b0d73aba99715.png";
import imgImage184 from "figma:asset/e80f8f2f322aec499601af18b458e9d53022201e.png";
import imgImage740 from "figma:asset/f0a336995ccd5d9cba3c90e72613a3c2da23c151.png";
import imgImage2322 from "figma:asset/38b0d97f752e46623c7c6d6c47d8335cab9a65c3.png";

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0a282e]">
      <div className="relative w-full h-full">
        {/* Main Container - EXACT same centering as Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1440px] h-full">
          
          {/* Cover Section */}
          <div className="absolute left-0 top-0 w-[1440px] h-full">
            {/* Dark background */}
            <div className="absolute bg-[#0a282e] h-full left-0 top-0 w-[1440px]" />
            
            {/* Beige center panel - Start from absolute top (0px) to eliminate gap */}
            <div className="absolute bg-[#dac5a7] h-full left-[509px] top-0 w-[430px]" />
            
            {/* Blur effects */}
            <div className="absolute h-[192px] left-[1269px] top-[300px] w-[105px]">
              <div className="absolute inset-[-119.27%_-218.1%] opacity-20 blur-[114.5px]">
                <div className="w-[105px] h-[192px] rounded-full bg-white/30" />
              </div>
            </div>
            <div className="absolute h-[192px] left-[3px] top-0 w-[105px]">
              <div className="absolute inset-[-119.27%_-218.1%] opacity-20 blur-[114.5px]">
                <div className="w-[105px] h-[192px] rounded-full bg-white/30" />
              </div>
            </div>
            
            {/* Photo - scaled proportionally for smaller height */}
            <div className="absolute" style={{
              top: '80px',
              left: '509px',
              width: '430px',
              height: '450px'
            }}>
              <img 
                alt="Muhamad Nur Awaludin - Kak Mumu" 
                className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full" 
                src={imgMumuFoto24} 
              />
            </div>
            
            {/* White background for logos - with rounded top corners */}
            <div className="absolute bg-white left-0 bottom-0 w-[1440px] rounded-t-[32px]" style={{ height: '140px' }} />
            
            {/* Text above logos */}
            <div className="absolute left-0 w-[1440px] text-center" style={{ bottom: '110px' }}>
              <p className="font-['Montserrat:Bold',sans-serif] font-bold text-gray-700 text-[16px] leading-[22px]">
                Mengisi seminar, pelatihan maupun kelas edukasi berbagai institusi, perusahaan, sekolah dan organisasi di 50+ kota di Indonesia
              </p>
            </div>
            
            {/* Logo strip with marquee */}
            <div className="absolute left-[36px] w-[1388px] h-[76px] overflow-hidden" style={{ bottom: '30px' }}>
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee-home {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee-home {
                  animation: marquee-home 40s linear infinite;
                }
                .animate-marquee-home:hover {
                  animation-play-state: paused;
                }
              `}} />
              
              <div className="flex items-center h-full">
                <div className="flex items-center gap-[11px] animate-marquee-home">
                  {/* Duplicate logos for seamless loop */}
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex items-center gap-[11px] shrink-0">
                      {/* Logo 1 - Bank Indonesia - 100% PIXEL PERFECT */}
                      <div className="h-[60px] w-[112px] relative shrink-0">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="Partner logo" className="absolute h-[131.03%] left-[-0.23%] max-w-none top-[-15.52%] w-[100.47%]" src={imgImage2313} />
                        </div>
                      </div>
                      {/* Logo 2 - BPS - 100% PIXEL PERFECT */}
                      <div className="size-[45px] relative shrink-0">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="Partner logo" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-[397.22%]" src={imgImage508} />
                        </div>
                      </div>
                      {/* Logo 3 - Komdigi - 100% PIXEL PERFECT */}
                      <div className="h-[18.727px] w-[109.514px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2312} />
                      </div>
                      {/* Logo 4 - 100% PIXEL PERFECT */}
                      <div className="h-[44px] w-[60px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2311} />
                      </div>
                      {/* Logo 5 - 100% PIXEL PERFECT */}
                      <div className="size-[45px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2310} />
                      </div>
                      {/* Logo 6 - 100% PIXEL PERFECT */}
                      <div className="h-[33px] w-[95px] relative shrink-0">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="Partner logo" className="absolute h-full left-[1.73%] max-w-none top-0 w-[96.92%]" src={imgImage750} />
                        </div>
                      </div>
                      {/* Logo 7 - Telkomsel - 100% PIXEL PERFECT */}
                      <div className="size-[52px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoDtSm} />
                      </div>
                      {/* Logo 8 - 100% PIXEL PERFECT */}
                      <div className="size-[55px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2317} />
                      </div>
                      {/* Logo 9 - 100% PIXEL PERFECT */}
                      <div className="h-[50px] w-[33px] relative shrink-0">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="Partner logo" className="absolute h-[90.23%] left-[-0.71%] max-w-none top-[4.88%] w-full" src={imgImage2320} />
                        </div>
                      </div>
                      {/* Logo 10 - 100% PIXEL PERFECT */}
                      <div className="h-[50px] w-[96px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2321} />
                      </div>
                      {/* Logo 11 - 100% PIXEL PERFECT */}
                      <div className="h-[28px] w-[83px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2033} />
                      </div>
                      {/* Logo 12 - 100% PIXEL PERFECT */}
                      <div className="size-[36px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2319} />
                      </div>
                      {/* Logo 13 - 100% PIXEL PERFECT */}
                      <div className="h-[31px] w-[94px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2314} />
                      </div>
                      {/* Logo 14 - 100% PIXEL PERFECT */}
                      <div className="h-[29.13px] w-[134px] relative shrink-0">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="Partner logo" className="absolute h-full left-[-0.91%] max-w-none top-0 w-[98.91%]" src={imgImage2315} />
                        </div>
                      </div>
                      {/* Logo 15 - 100% PIXEL PERFECT */}
                      <div className="h-[44px] w-[43px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2316} />
                      </div>
                      {/* Logo 16 - 100% PIXEL PERFECT */}
                      <div className="size-[36px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage184} />
                      </div>
                      {/* Logo 17 - 100% PIXEL PERFECT */}
                      <div className="h-[22px] w-[64px] relative shrink-0">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="Partner logo" className="absolute h-[327.24%] left-[-4.61%] max-w-none top-[-112.87%] w-[109.4%]" src={imgImage740} />
                        </div>
                      </div>
                      {/* Logo 18 - 100% PIXEL PERFECT */}
                      <div className="h-[44px] w-[60px] relative shrink-0">
                        <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2322} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mari Berkolaborasi - Right side */}
            <Link 
              to="/kontak"
              className="absolute left-[978px] top-[350px] inline-flex items-center gap-3 text-[#dac5a7] hover:text-white font-['Montserrat:Medium',sans-serif] font-medium text-[28px] leading-[25px] transition-colors group"
            >
              Mari Berkolaborasi
              <svg className="w-[34px] h-[15px] group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 35 15">
                <path d={svgPaths.p28059e00} fill="currentColor" />
              </svg>
            </Link>
          </div>
          
          {/* Left Content - Assalamu'alaikum section - PIXEL PERFECT FROM FIGMA */}
          <div className="absolute left-[55px] top-[120px] w-[400px] h-[266px]">
            {/* Heading at top-0 */}
            <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[0] left-0 text-[41.128px] text-white top-0">
              <span className="leading-[43.413px]">Assalamu'alaikum</span>
              <span className="leading-[43.413px] text-[#dac5a7]">.</span>
            </p>
            
            {/* Name at top-[53px] */}
            <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[51px] text-[#dac5a7] text-[24px] top-[53px]">
              Saya Muhamad Nur Awaludin
            </p>
            
            {/* Line divider at top-[73px] */}
            <div className="absolute h-0 left-0 top-[73px] w-[32px]">
              <div className="absolute inset-[-3.14px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 3.13786">
                  <line stroke="#DAC5A7" strokeWidth="3.13786" x2="32" y1="1.56893" y2="1.56893" />
                </svg>
              </div>
            </div>
            
            {/* Role description at top-[106px] */}
            <div className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[30.366px] left-0 text-[21.702px] text-white top-[106px] whitespace-nowrap">
              <p className="mb-0">{`Narasumber & Trainer · Mentor · `}</p>
              <p>Program Manager · Product Designer</p>
            </div>
            
            {/* Download CV button at top-[206px] */}
            <div className="absolute left-0 top-[206px]">
              <Link 
                to="/kontak"
                className="relative flex items-center justify-center bg-[#dac5a7] hover:bg-[#c9b496] h-[60px] w-[230px] rounded-[8px] transition-colors"
              >
                {/* Download icon */}
                <div className="absolute left-[45px] size-[24px] top-[18px]">
                  <div className="absolute inset-[12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g>
                        <path clipRule="evenodd" d={svgDownload.p39fea300} fill="#0E0E0E" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgDownload.p3baeb000} fill="#0E0E0E" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
                {/* Text */}
                <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[74px] text-[#0e0e0e] text-[16px] top-[22px]">
                  Download CV
                </p>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Description */}
          <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[25px] left-[978px] text-[#dac5a7] text-[16px] text-justify top-[130px] w-[431px] whitespace-pre-wrap">
            <span>Praktisi di bidang </span>
            <span className="font-['Montserrat:Bold',sans-serif] font-bold">edukasi, psikologi, dan teknologi </span>
            <span>dengan pengalaman</span>
            <span className="font-['Montserrat:Bold',sans-serif] font-bold"> lebih dari 10 tahun mendampingi sekolah, keluarga, dan organisasi </span>
            <span>dalam merancang program literasi digital, parenting, serta pengembangan pendidikan berbasis data dan pendekatan psikologi.</span>
          </p>
        </div>
      </div>
    </div>
  );
}