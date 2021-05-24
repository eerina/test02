import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const tab = document.getElementById("tab");
    const tabButtons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content-p");

    console.log(tab, tabButtons, contents);

    const tabClick = (e) => {
      tabButtons.forEach((x) => x.classList.remove("active"));
      contents.forEach((x) => x.classList.remove("block"));
      e.target.classList.add("active");

      contents.forEach((x) => {
        if (x.dataset.tab === e.target.dataset.tab) {
          x.classList.add("block");
          x.classList.remove("hidden");
        } else {
          x.classList.add("hidden");
        }
      });
    };

    tabButtons.forEach((x) => x.addEventListener("click", tabClick, false));
  }, []);
  return (
    <div>
      <div className="bg-white">
        <nav id="tab" className="flex flex-row">
          <button
            data-tab="1"
            className="flex-auto tab-button active text-gray-300 py-4 px-8 block hover:text-red-700 focus:border-blue-800 active:text-red-700 border-b-2 font-bold"
          >
            CEO메세지
          </button>
          <button
            data-tab="2"
            className="flex-auto tab-button  text-gray-300 py-4 px-8 block hover:text-red-700 focus:border-blue-800 active:text-red-700 border-b-2 font-bold"
          >
            경영이념
          </button>
          <button
            data-tab="1"
            className="flex-auto tab-button  text-gray-300 py-4 px-8 block hover:text-red-700 focus:border-blue-800 active:text-red-700 border-b-2 font-bold"
          >
            연혁/수상
          </button>
          <button
            data-tab="1"
            className="flex-auto tab-button  text-gray-300 py-4 px-8 block hover:text-red-700 focus:border-blue-800 active:text-red-700 border-b-2 font-bold"
          >
            파트너사
          </button>
          <button
            data-tab="1"
            className="flex-auto tab-button  text-gray-300 py-4 px-8 block hover:text-red-700 focus:border-blue-800 active:text-red-700 border-b-2 font-bold"
          >
            오시는길
          </button>
        </nav>
      </div>
      <div>
        <div data-tab="1" className="content-p">
          numbers 1
        </div>
        <div data-tab="2" className="content-p hidden">
          numbers 2
        </div>
      </div>
    </div>
  );
}
