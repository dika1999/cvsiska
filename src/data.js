//  icons
import {
  FiPhoneCall,
  FiLayout,
  FiSettings,
  FiMail,
  FiMapPin,
  FiHome,
  FiShoppingBag,
  FiFastForward,
} from 'react-icons/fi';

// WA Icon
// import WhatsApp from './assets/img/WA_icon/whatsapp_logo.png';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/g1.png';
import Project2 from './assets/img/projects/g2.jpeg';
import Project3 from './assets/img/projects/g3.jpeg';
import Project4 from './assets/img/projects/g4.jpeg';
import Project5 from './assets/img/projects/g5.jpeg';
import Project6 from './assets/img/projects/g6.jpeg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

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
  // {
  //   name: 'testimoni',
  //   href: 'testimonials',
  // },
  {
    name: 'kontak',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiPhoneCall />,
    href: 'https://wa.me/62082334659838',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
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
    category: 'Konstruksi Jalan Raya',
  },
  {
    id: '3',
    image: Project3,
    name: 'Pembangunan Jalan (LPJU) Desa Tamansari Kecamatan Wonorejo Kab. Pasuruan',
    category: 'Konstruksi Jalan Raya',
  },
  {
    id: '4',
    image: Project4,
    name: 'Perbaikan Jalan Kecamatan Keraton Kab. Pasuruan',
    category: 'Konstruksi Jalan Raya',
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
    name: 'Konstruksi Jalan Raya',
  },
  {
    name: 'Instalasi Listrik',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Konstruksi Jalan Raya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiHome />,
    name: 'Konstruksi Gedung',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiFastForward />,
    name: 'Instalasi Listrik',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiLayout />,
    name: 'Konstruksi Jaringan Irigasi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Instalasi Mekanikal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiShoppingBag />,
    name: 'Perdagangan Besar Berbagai Macam Material Bangunan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiShoppingBag />,
    name: 'Perdagangan Besar Alat Tulis dan Gambar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiLayout />,
    name: 'Konstruksi Jalan Rel dan Jembatan Rel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
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
