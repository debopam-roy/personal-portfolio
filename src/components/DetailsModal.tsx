'use client';

import { useEffect, useRef } from 'react';
import { TimelineItemProps } from './TimelineItem';
import SkillTag from '@/components/SkillTag';

interface DetailsModalProps {
  item: TimelineItemProps | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailsModal = ({ item, isOpen, onClose }: DetailsModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      // Restore body scroll
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-20 flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow w-full max-w-5xl transform transition-all duration-300 ease-out scale-100"
        style={{ maxHeight: '85vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl z-30 px-6 py-4">
          <div className="flex justify-between items-start">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-gray-600 mb-1 truncate">{item.title}</h2>
              <p className="text-lg text-gray-800 font-medium truncate">{item.subtitle}</p>
              <p className="text-gray-500 text-sm">{item.period}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 flex-shrink-0"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(85vh - 120px)' }}>
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              Description
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </div>

          {/* Two Column Layout for Better Space Usage */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Projects */}
              {item.projects && item.projects.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    Projects
                  </h3>
                  <div className="space-y-3">
                    {item.projects.map((project, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow">
                        <h4 className="font-semibold text-gray-800 mb-2">{project.name}</h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {project.tech_stack.slice(0, 4).map((tech, techIndex) => (
                            <SkillTag key={techIndex} size="sm" className="text-xs px-2 py-0.5">
                              {tech}
                            </SkillTag>
                          ))}
                          {project.tech_stack.length > 4 && (
                            <span className="text-gray-500 text-xs px-2 py-0.5">+{project.tech_stack.length - 4} more</span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tagIndex) => (
                            <SkillTag key={tagIndex} size="sm" className="text-xs px-2 py-0.5">
                              {tag}
                            </SkillTag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    Key Achievements
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Topics Focused */}
              {item.topics_focused && item.topics_focused.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    Focus Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.topics_focused.map((topic, index) => (
                      <SkillTag key={index} size="sm">
                        {topic}
                      </SkillTag>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {item.tech_stack && item.tech_stack.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tech_stack.map((tech, index) => (
                      <SkillTag key={index} size="sm">
                        {tech}
                      </SkillTag>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Gained */}
              {item.skills_gained && item.skills_gained.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    Skills Developed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills_gained.map((skill, index) => (
                      <SkillTag key={index} size="sm">
                        {skill}
                      </SkillTag>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};