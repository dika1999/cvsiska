//  icons
import {
  FiSettings,
  FiMail,
  FiMapPin,
  FiHome,
  FiShoppingBag,
  FiSidebar,
} from 'react-icons/fi';

import { SiRailway, SiRainmeter, SiWhatsapp } from 'react-icons/si';

import { SlEnergy } from 'react-icons/sl';

// projects images
import Project1 from './assets/img/projects/g1.webp';
import Project2 from './assets/img/projects/g2.webp';
import Project3 from './assets/img/projects/g3.webp';
import Project4 from './assets/img/projects/g4.webp';
import Project5 from './assets/img/projects/g5.webp';
import Project6 from './assets/img/projects/g6.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'tentang',
    href: 'about',
  },
  {
    name: 'portofolio',
    href: 'portfolio',
  },
  {
    name: 'jasa',
    href: 'services',
  },
  {
    name: 'kontak',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <SiWhatsapp />,
    href: 'https://wa.me/62082334659838',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Pengecatan menara air Erlangga PDAM kota Pasuruan',
    category: 'Konstruksi Gedung',
  },
  {
    id: '2',
    image: Project2,
    name: 'Pembangunan Jalan (LPJU) Desa Klinter Kecamatan Kejayan Kab. Pasuruan',
    category: 'Pembangunan Jalan (LPJU)',
  },
  {
    id: '3',
    image: Project3,
    name: 'Pembangunan Jalan (LPJU) Desa Tamansari Kecamatan Wonorejo Kab. Pasuruan',
    category: 'Pembangunan Jalan (LPJU)',
  },
  {
    id: '4',
    image: Project4,
    name: 'Pengadaan barang ATK',
    category: 'Pengadaan Barang',
  },
  {
    id: '5',
    image: Project5,
    name: 'Pengecatan dan pemeliharaan gedung BAPPEDA Kota Pasuruan',
    category: 'Konstruksi Gedung',
  },
  {
    id: '6',
    image: Project6,
    name: 'Pembangunan Saluran Drainase Desa Karang Sentul Wilayah Kecamatan Gondangwetan Kab. Pasuruan',
    category: 'Konstruksi Irigasi',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Konstruksi Gedung',
  },
  {
    name: 'Konstruksi Irigasi',
  },
  {
    name: 'Pembangunan Jalan (LPJU)',
  },
  {
    name: 'Pengadaan Barang',
  },
];


// services
export const services = [
  {
    icon: <FiSidebar />,
    name: 'Konstruksi Jalan Raya',
  },
  {
    icon: <FiHome />,
    name: 'Konstruksi Gedung',
  },
  {
    icon: <SlEnergy />,
    name: 'Instalasi Listrik',
  },
  {
    icon: <SiRainmeter />,
    name: 'Konstruksi Jaringan Irigasi',
  },
  {
    icon: <FiSettings />,
    name: 'Instalasi Mekanikal',
  },
  {
    icon: <FiShoppingBag />,
    name: 'Perdagangan Besar Berbagai Macam Material Bangunan',
  },
  {
    icon: <FiShoppingBag />,
    name: 'Perdagangan Besar Alat Tulis dan Gambar',
  },
  {
    icon: <SiRailway />,
    name: 'Konstruksi Jalan Rel dan Jembatan Rel',
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Ada Pertanyaan ?',
    subtitle: 'Hubungi kami melalui : ',
    email: 'cv.siska18@gmail.com',
    nohp1: '087703382260',
    nohp2: '082334659838',
  },
  {
    icon: <FiMapPin />,
    title: 'Alamat kami',
    subtitle: 'Perum Sekar Indah I Blok L 11 Kota Pasuruan',
  },
];
