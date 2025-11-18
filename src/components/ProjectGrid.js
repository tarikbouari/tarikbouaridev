/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ data, projects }) => {
  const list = data || projects || [];
  if (!Array.isArray(list) || list.length === 0) return <p>No project available</p>;

  return (
    <div>
      {list.map((p, idx) => (
        <ProjectCard key={p.id} project={p} index={idx} />
      ))}
    </div>
  );
};

ProjectGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  projects: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};

ProjectGrid.defaultProps = {
  data: undefined,
  projects: undefined,
};

export default ProjectGrid;
