import ahoeimg from '../images/AH0.jpg';
import hap from '../images/gez.jpg';
import ahoe from '../images/ahoe.jpg';
import estate from '../images/vehii.jpg';

export const data = [
  {
    id: 'cms-1',
    category: 'cms',
    titre: 'NafexGlobal',
    text: ' An ecommerce website for light and home decoration base in Accra, Nafex is specialized in providing exquisite lighting solutions that transform spaces, adding warmth, sophistication, and functionality. Designed and built using figma and WordPress   ',
    image: ahoeimg,
    tools: { frist: 'Wordpress', second: 'Figma', third: 'Hostinger' },
    links: { git: 'https://github.com/', source: 'https://nafexgh.com' },
  },
  {
    id: 'app-1',
    category: 'apps',
    titre: 'Vehigo',
    text: 'A car rental app that allow users to see available car for rental. A user can add car to the car list or select his favorite. The frontend is built with react connected to a Backend API built with  rails.',
    image: estate,
    tools: {
      frist: 'GitHub', second: 'react', third: 'redux', fourth: 'Rails', fith: 'API',
    },
    links: { git: 'https://github.com/', source: 'https://ahoechic.com' },
  },
  {
    id: 'cms-2',
    category: 'cms',
    titre: 'AhoeChic',
    text: 'A real estate website build for ahoechic company based in Lomé,Togo. I developed a visually appealing property that showcase each property with high quality image, and detailed description. Users can easily navigatethrough the site and explore proprieties of interest ',
    image: ahoe,
    tools: {
      frist: 'GitHub', second: 'react', third: 'Booststrap', fourth: 'Webpack',
    },
    links: { git: 'https://github.com/', source: 'https://ahoechic.com' },
  },
  {
    id: 'data-1',
    category: 'data-projet',
    titre: 'AfroTech',
    text: 'AfroTech festival is an online website for events and conferences about tech. AfroTech brings together all technology players such as startups, companies, and individuals. It also includes a conference where African business leaders and pioneers thinkers discuss the industrys most relevant issues. Afrotech is a place to share knowledge, build a growing network, exhibit the latest tech project and make business.. ',
    image: hap,
    tools: {
      frist: 'HTML5/CSS', second: 'JavaScript', third: 'ES6',
    },
    links: { git: 'https://github.com/tarikbouari/AfroTech-Festival', source: 'https://tarikbouari.github.io/AfroTech-Festival/index.html' },
  },

];

export const projetCategories = ['cms', 'apps', 'data-projet'];
