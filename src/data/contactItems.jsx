import { Mail, Phone, MapPin } from "lucide-react";
import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";

export const contactItems = [
  {
    label: "Email",
    value: "jcw0522@gachon.ac.kr",
    icon: <Mail size={24} />,
    bgColor: "bg-blue-500",
  },
  {
    label: "Phone",
    value: "010-3104-5118",
    icon: <Phone size={24} />,
    bgColor: "bg-green-500",
  },
  {
    label: "Github",
    value: "github.com/JeongCW0522",
    icon: <TbBrandGithub size={24} />,
    bgColor: "bg-black",
    link: "https://github.com/JeongCW0522",
  },
  {
    label: "Instagram",
    value: "instagram.com/cherrykok123",
    icon: <TbBrandInstagram size={24} />,
    bgColor: "bg-linear-to-br from-purple-500 via-pink-500 to-orange-500",
    link: "https://instagram.com/cherrykok123",
  },
  {
    label: "Location",
    value: "Seoul, Guro-gu",
    icon: <MapPin size={24} />,
    bgColor: "bg-linear-to-br from-orange-600 to-orange-400",
  },
];
