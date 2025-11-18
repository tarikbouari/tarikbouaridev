/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useMemo } from 'react';
import { GrProjects } from 'react-icons/gr';
import { projetCategories, data } from './ProjectsData';
import ProjectTab from './ProjectTab';
import ProjectGrid from './ProjectGrid';

const Project = () => {
  const [activeCategory, setActiveCategory] = useState(projetCategories[0]);
  const filterdProject = useMemo(
    () => data.filter((item) => item.category === activeCategory),
    [activeCategory],
  );
  return (
    <div className=" py-5">
      <div className="container mx-auto px-12 py-4 " id="project">
        <div
          className=" flex justify-center items-center gap-2 border
           px-4 py-2 rounded-full w-[150px]"
        >
          <GrProjects />
          <span>Projects</span>
        </div>
        <ProjectTab
          tabs={projetCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <ProjectGrid category={projetCategories} projects={filterdProject} />
      </div>
    </div>
  );
};

export default Project;
