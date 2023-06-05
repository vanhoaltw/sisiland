import { IoLogoSoundcloud, IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa"

const links = [
  { title: "Facebook", icon: <FaFacebookF />, href: "" },
  {
    title: "Zalo",
    icon: <img src="images/zalo.png" height="auto" width="100%" />,
    href: "",
  },
  { title: "Tiktok", icon: <IoLogoTiktok />, href: "" },
  { title: "Soundcloud", icon: <IoLogoSoundcloud />, href: "" },
];

export default function Socials() {
  return (
    <ul className="flex items-center gap-2 flex-wrap">
      {links.map((l) => (
        <li
          key={l.title}
          className="cursor-pointer h-10 w-10 p-2 flex items-center justify-center inline-block text-2xl rounded-full border border-current text-main hover:scale-110 transition-transform"
        >
          {l.icon}
        </li>
      ))}
    </ul>
  );
}
