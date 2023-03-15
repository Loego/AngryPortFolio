import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
import img4 from "../assets/images/project-img4.png";
import img5 from "../assets/images/project-img5.png";
import img6 from "../assets/images/project-img6.png";
import img7 from "../assets/images/project-img7.png";
import img8 from "../assets/images/project-img8.png";
import img9 from "../assets/images/project-img9.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "DEX",
      url: "https://www.wardenswap.finance/",
      description:
        "The big difference from the other swap platforms is an algorithm to find the best rate for arbitrary tokens automatically. POS: Frontend",
      img: img1,
    },
    {
      id: 2,
      title: "DeFi",
      description:
        "Kept a persistent state (storage and balance) at a high level by delegating ERC1967 proxy contract POS: Smart Contract",
      url: "https://kaizen.finance/",
      img: img2,
    },
    {
      id: 3,
      title: "DeFi",
      url: "https://app.liquidcrypto.finance/",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 4,
      url: "https://battlehero.io/",
      title: "NFT Game",
      description:
        "Built smart contracts of NFT Game.(Marketplace by implementing ERC-721 and developed staking with ERC20) POS: Smart Contract",
      img: img4,
    },
    {
      id: 5,
      title: "Business Startup",
      url: "https://www.exoworlds.io/",
      description: "Developed Explorer",
      img: img5,
    },
    {
      id: 6,
      title: "DeFi",
      url: "https://dapp.cheemsx.org/",
      description: "",
      img: img6,
    },
    {
      id: 7,
      title: "Business Startup",
      url: "https://zigzag-exchange.netlify.app/",
      description: "Design & Development",
      img: img7,
    },
    {
      id: 8,
      title: "Business Startup",
      url: "https://app.barnbridge.com/governance/overview",
      description: "Design & Development",
      img: img8,
    },
    {
      id: 9,
      title: "Metaverse",
      url: "https://ariva-game.vercel.app/",
      description: "Design & Development",
      img: img9,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]"></p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          {/* <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          {/* <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Text-1
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button> */}
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          ></div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          ></div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
