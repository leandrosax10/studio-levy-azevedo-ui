import { IconType } from "react-icons";
import { CiBadgeDollar } from "react-icons/ci";
import { FiHome, FiUsers, FiUser, FiFileText } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link?: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: "Início", icon: FiHome, link: "/dashboard" },
  {
    name: "Comandas",
    icon: FiFileText,
    link: "/comandas",
  },
  { name: "Serviços", icon: CiBadgeDollar, link: "/lista-servicos" },
  { name: "Clientes", icon: FiUsers, link: "/lista-clientes" },
  { name: "Usuários", icon: FiUser, link: "/lista-usuarios" },
];
