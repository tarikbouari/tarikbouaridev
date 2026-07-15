import hap from '../images/gez.jpg';
import solis from '../images/solis.jpg';
import guedzeit from '../images/guedzeit.jpg';

export const data = [
  {
    id: 'app-1',
    category: 'apps',
    titre: 'Guedze IT — Commercial IT Services Platform',
    text: 'A modern IT services platform built with Next.js, deployed on OVH, and containerized with Docker. I implemented a full CI/CD pipeline using GitHub Actions to automate build, testing, and deployment. The project delivers a clean, responsive interface presenting the company’s services and expertise in a professional way.This project demonstrates my ability to deliver a production‑ready commercial website, integrate modern DevOps practices, and collaborate with business stakeholders to translate their needs into a functional digital product.',
    image: guedzeit,
    tools: {
      frist: 'Next.js', second: 'Docker', third: 'GitHub Actions', fourth: 'OVH Hosting', fith: 'Figma',
    },
    links: { git: 'https://github.com/', source: 'https://guedze.com/' },
  },
  {
    id: 'all-1',
    category: 'all',
    titre: 'Guedze IT — Commercial IT Services Platform',
    text: 'A modern IT services platform built with Next.js, deployed on OVH, and containerized with Docker. I implemented a full CI/CD pipeline using GitHub Actions to automate build, testing, and deployment. The project delivers a clean, responsive interface presenting the company’s services and expertise in a professional way.This project demonstrates my ability to deliver a production‑ready commercial website, integrate modern DevOps practices, and collaborate with business stakeholders to translate their needs into a functional digital product.',
    image: guedzeit,
    tools: {
      frist: 'Next.js', second: 'Docker', third: 'GitHub Actions', fourth: 'OVH Hosting', fith: 'Figma',
    },
    links: { git: 'https://github.com/', source: 'https://guedze.com/' },
  },
  {
    id: 'app-2',
    category: 'apps',
    titre: 'Solis — AI Agents Platform for Solopreneurs',
    text: 'Solis is an AI‑powered platform built with Next.js, FastAPI, and a custom LangChain agent. It helps solopreneurs structure and advance their business by automating research, preparation, and operational tasks while keeping full control over decisions.The system uses a Next.js frontend deployed on Vercel, communicating with a FastAPI backend hosted on Render . The backend orchestrates a LangChain agent to process inputs, analyze content, and generate actionable outputs.This project demonstrates my ability to build production‑ready AI applications, integrate multi‑service architectures, and design intelligent workflows that turn complex processes into simple, usable tools for real business needs.',
    image: solis,
    tools: {
      frist: 'Next.js', second: 'FastAPI', third: 'LangChain', fourth: 'Vercel', fith: 'Render',
    },
    links: { git: 'https://github.com/tarikbouari/prospect_ia', source: 'https://solis-delta-dusky.vercel.app/' },
  },
  {
    id: 'cms-1',
    category: 'cms',
    titre: 'AfroTech',
    text: 'AfroTech festival is an online website for events and conferences about tech. AfroTech brings together all technology players such as startups, companies, and individuals. It also includes a conference where African business leaders and pioneers thinkers discuss the industrys most relevant issues. Afrotech is a place to share knowledge, build a growing network, exhibit the latest tech project and make business.. ',
    image: hap,
    tools: {
      frist: 'HTML5/CSS', second: 'JavaScript', third: 'ES6',
    },
    links: { git: 'https://github.com/tarikbouari/AfroTech-Festival', source: 'https://tarikbouari.github.io/AfroTech-Festival/index.html' },
  },

];

export const projetCategories = ['apps', 'IA/automation', 'cms'];
