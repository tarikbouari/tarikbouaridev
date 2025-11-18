/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */

import { useRef } from 'react';

const ProjectTab = ({ tabs = [], active, onChange }) => {
  if (!Array.isArray(tabs) || tabs.length === 0) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);
  function handleKey(e, idx) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const next = e.key === 'ArrowRight'
        ? (idx + 1) % tabs.length
        : (idx - 1 + tabs.length) % tabs.length;
      // eslint-disable-next-line react/destructuring-assignment
      onChange(tabs[next]);
      ref.current?.querySelectorAll('button')[next]?.focus();
    }
  }
  return (
    <div className="flex justify-center items-center my-8">
      <nav aria-label="Filtre projets">
        <div ref={ref} style={{ display: 'flex', gap: 8 }}>
          {tabs.map((t, i) => {
            const isActive = t === active;
            return (
              // eslint-disable-next-line react/button-has-type
              <button
                key={t}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t}`}
                id={`tab-${t}`}
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(e) => handleKey(e, i)}
                onClick={() => onChange(t)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 6,
                  border: '1px solid #ddd',
                  background: isActive ? '#132D3E' : '#f5f5f5',
                  color: isActive ? '#fff' : '#111',
                  cursor: 'pointer',
                }}
              >
                {String(t).replace('-', ' ')}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default ProjectTab;
