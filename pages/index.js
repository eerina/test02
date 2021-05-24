import Head from "next/head";
import { useEffect } from "react";
import MySlider from "../components/slider";

export default function Home() {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       document.querySelector(".maintext").classList.remove("mt-[200px]");
  //       window.scrollTo(0, 0);
  //     }, 1000)
  // }, []);

  return (
    <>
      <Head>
        <title>(주)아신 Aseen</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;0,800;0,900;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex flex-wrap flex-col container justify-center">
        <div
          style={{
            fontFamily: "poppins",
            fontWeight: "bold",
            fontSize: "5vw",
          }}
          className="pl-20 z-10 maintext2 mt-[100px]"
        >
          Aseen is the<br></br>
          future of logistics.
        </div>

        <div
          style={{ width: "100vw", height: 754 }}
          id="myImg"
          className="left-0 relative"
        >
          <img
            className="absolute left-0 bottom-2"
            src="./assets/images/img_main1.jpg"
            alt="main_img1"
          ></img>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <div className="relative left-10 rounded-full h-24 w-24 bg-red justify-center bg-red-500 "></div>
          <div
            style={{
              fontFamily: "poppins",
              fontSize: 58,
              fontWeight: "Semeold",
            }}
            className="pt-10 z-10 border-b-2 divide-y-2"
          >
            OUR BUSINESS
          </div>
        </div>
        <div
          style={{
            fontFamily: "NanumBarunGothic",
            fontSize: 28,
            fontWeight: "Semeold",
          }}
          className=" flex"
        >
          아신은 국내 최초로 유통 물류 산업의 선도적 역할을<br></br>
          해온 유통 물류 전문 회사 입니다.
        </div>
      </div>
      <div
        style={{ fontFamily: "poppins", fontSize: 28, fontWeight: "Semeold" }}
        className="pl-80 pt-10 flex"
      >
        SAM SYSTEM
      </div>
      <div className="pl-80 pt-10 nanum flex">
        상품구매, 집하, 통합배송, 점포경영 컨설팅 등 복잡 다단한 유통경로를
        획기적으로<br></br>
        단순화 하여 물류 생산성과 효율성의 이상적 목표를 실현시킨 첨단 물류
        시스템 입니다.
      </div>
      <div>
        <MySlider options={{ autoplay: true }}>
          <div>
            <img src="./assets/images/img_main2.jpg" alt="main_img2"></img>
          </div>
          <div>
            <img src="./assets/images/img_main3.jpg" alt="main_img3"></img>
          </div>
          <div>
            <img src="./assets/images/img_main1.jpg" alt="main_img4"></img>
          </div>
        </MySlider>
      </div>
      {/* <div style={{ width: 1920, height: 754 }} className="pl-0">
        <img src="./assets/images/img_main2.jpg" alt="main_img2"></img>
      </div> */}
      <div
        style={{
          fontFamily: "Nanum Barun Gothic",
          fontSize: 44,
          fontWeight: "Semeold",
          background: "black",
          color: "white",
        }}
        className="pl-80 pt-40 py-48 flex"
      >
        아신은 고객에게 성공적인 서비스를 제공하여 사업에
        <br></br>
        성공할 수 있도록 고객의 가치를 최우선으로 생각합니다.
      </div>

      <div className="flex justify-between w-full space-x-10">
        <div>창조</div>
        <div className="truncate">
          국내최초 통합 공급시스템을 갖춘 물류 혁신기업으로 출발한 아신은 창조적
          경영 시스템을 구축한 미래 지향적인 기업입니다.
        </div>
      </div>
    </>
  );
}
