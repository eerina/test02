import { useRef } from "react";
import MySlider from "../components/slider";
import SliderController from "../components/sliderController";

export default function News() {
  const slider = useRef();
  return (
    <div className="flex flex-wrap flex-col items-center">
      <div className="flex mt-30 bg-black lg:bg-red-500">
        <div className="flex-grow w-1/3"></div>
        <div className="relative left-20 bottom-10 rounded-full w-12 h-12 bg-gray-300"></div>
        <div className=" rounded-full w-4 h-4 bg-red-500"></div>
        <div className="text-lg z-10">
          Aseen is the
          <br />
          future of logistics.
        </div>
      </div>
      <img
        className="relative pl-20 bottom-5"
        src="/assets/images/img_main1.jpg"
      />
      <div className="w-30">
        <MySlider ref={slider}>
          <div>
            1
            {/* <div>
            <div className="rounded-full bg-gray-400 w-12 h-12"></div>
            <div>OUR BUSINESS</div>
            <p>
              아신은 국내 최초로 유통 물류 산업의 선도적 역할을 해온 유통 물류
              전문 회사 입니다.
            </p>
          </div>
          <div>
            <div className="rounded-full bg-gray-400 w-12 h-12"></div>
            <div>OUR BUSINESS</div>
            <p>
              아신은 국내 최초로 유통 물류 산업의 선도적 역할을 해온 유통 물류
              전문 회사 입니다.
            </p>
          </div> */}
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </MySlider>
        <SliderController slider={slider}></SliderController>
      </div>
      <div className="relative bg-black h-40 w-full">
        <div className="absolute left-[-100px]  rounded-full border-red-500 w-60 h-60 border-2 bg-transparent"></div>
      </div>
      <div>
        <div className="flex">
          <div>
            ckdwh
            <br />
            laksdjflaksdasdkfljlksdfrhle
          </div>
          <img src="/assets/images/about_01.png"></img>
        </div>
        <div className="flex">
          <div className="w-40 h-48">
            <img src="/assets/images/about_02.png"></img>
          </div>
          <div>
            asdkfjals<br></br>asdfjaslkdfjalsdkf
          </div>
        </div>
        <div className="flex">
          <div>asdfasdf</div>
          <img src="/assets/images/about_03.png"></img>
        </div>
      </div>
      <div className="testtext1">asdfasdfajhksdfkjhasdfkjhasdfjhkasdf</div>
    </div>
  );
}
