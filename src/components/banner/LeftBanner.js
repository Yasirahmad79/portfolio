import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiDart, SiGooglemaps , SiFirebase, SiFlutter } from "react-icons/si";

const socialMediaLinks = [
  { icon: <FaFacebookF />, url: "https://web.facebook.com/profile.php?id=100088881112750", id: 1 },
  { icon: <FaGithub />, url: "https://github.com/Yasirahmad79", id: 2 },
  { icon: <FaLinkedinIn />, url: "http://www.linkedin.com/in/yasir-ahmad-developer", id: 3 },
];

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Flutter Developer.",
      "Full Stack App Developer.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });
  const handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Yasir ahmad</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate full-stack Mobile App developer with a proficiency for crafting
          intuitive user experiences. Proficient in <span className="text-designColor font-bold">Dart & Flutter</span>, I
          specialize in building robust web and mobile applications.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {socialMediaLinks.map((link) => (
              <span className="bannerIcon" key={link.id}>
                <button onClick={() => handleSocialMediaClick(link.url)}>
                  {link.icon}
                </button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiDart />
            </span>
            <span className="bannerIcon">
            <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiGooglemaps  />
            </span>
            <span className="bannerIcon">
            <SiFirebase />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
