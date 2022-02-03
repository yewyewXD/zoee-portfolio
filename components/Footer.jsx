import React from "react";
import Image from "next/image";
import socials from "../json/socials.json";

const Footer = () => {
  return (
    <footer className="py-8 flex md:flex-row flex-col justify-center items-center">
      <span className="text-center">
        &copy; 2022 - ZoeeCopywriter.fr - All Rights Reserved
      </span>
      <div className="flex items-center md:mt-0 mt-2">
        {socials.map((social, index) => (
          <a
            className="ml-3 flex items-center transition duration-200 hover:opacity-80"
            key={`socialFooter${index}`}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/images/Social${social.name}.png`}
              height={22}
              width={22}
              alt=""
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
