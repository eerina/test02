import Head from "next/head";

export default function Home() {
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
      <div
        style={{ fontFamily: "poppins", fontSize: 100, fontWeight: "bold" }}
        className="pl-72 pt-24"
      >
        Aseen is
      </div>

      <div
        style={{ fontFamily: "poppins", fontSize: 100, fontWeight: "bold" }}
        className="pl-72"
      >
        the future of logistics.
      </div>
      <div
        style={{ width: 1920, height: 754 }}
        className="pl-72 relative  left-0"
      >
        <img src="./assets/images/img_main1.jpg" alt="main_img1"></img>
      </div>
    </>
  );
}
