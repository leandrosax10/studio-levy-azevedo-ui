import { IconType } from 'react-icons';
import {
  FiHome,
  /* FiMail, */
  FiUsers,
  /* FiFile, */
  FiFileText,
 /*  FiUserPlus, */
} from 'react-icons/fi';

interface LinkItemProps {
  name: string;
  icon: IconType;
  link?: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: 'Início', icon: FiHome, link: '/dashboard' },
  {
    name: 'Comandas',
    icon: FiFileText,
    link: '/comandas',
  },
  { name: 'Clientes', icon: FiUsers, link: '/lista-clientes' },
  { name: 'Usuários', icon: FiUsers, link: '/usuarios' },
];
