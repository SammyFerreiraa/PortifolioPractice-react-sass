import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import {BsDiscord} from "react-icons/bs"

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sammyferreira1/' },
  { name: "github", icon: <FaGithub />, link: 'https://github.com/Sammyferreira1' },
  { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/sammy.ferreira1/' },
  { name: "discord", icon: <BsDiscord />, link: 'https://discord.com/users/82500052736829034'}
];

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
            {network.icon}
        </a>
    ))}
  </section>;
};

export default SocialNetworks;
