interface Project {
  name: string;
  description: string;
  tech_stack: string[];
  tags: string[];
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  link?: string;
  projects: Project[];
  topics_focused: string[];
  tech_stack: string[];
  achievements: string[];
  skills_gained: string[];
}

interface TimelineProps {
  title: string;
  items: TimelineItemProps[];
}
import { MdInsertLink } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import { DetailsModal } from "./DetailsModal";

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  description,
  link,
  projects,
  topics_focused,
  tech_stack,
  achievements,
  skills_gained,
  onShowMore
}: TimelineItemProps & { onShowMore?: () => void }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-20 text-right">
        <span className="text-xs font-medium text-gray-800 bg-gray-100 px-2 py-1 rounded font-semibold">
          {period.split(" - ")[0]}
        </span>
      </div>

      <div className="flex-shrink-0 relative">
        <div className="w-3 h-3 bg-gray-500 rounded-full mt-1.5"></div>
        <div className={`absolute left-1.5 top-6 w-0.5 h-15 bg-gray-200`}></div>
  
      </div>

      <div className="flex-1 shadow px-4 py-2 rounded-xl border border-gray-200 bg-white">
        <div className="text-md text-gray-500 font-medium mb-1 italic">
          {title}
        </div>
        <h4 className="text-lg font-semibold text-gray-800 mb-1">
          {subtitle}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 ml-1"
              aria-label="Visit external link"
            >
              <MdInsertLink/>
            </a>
          )}
        </h4>
        <div className="text-gray-600 text-sm mb-3">
          <p className="leading-relaxed" style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {description}
          </p>
        </div>
        <button
          onClick={onShowMore}
          className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200 flex items-center gap-1 font-semibold mt-1"
        >
          Show More
          <FaChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};




const Timeline = ({ title, items }: TimelineProps & { onItemClick?: (item: TimelineItemProps) => void }) => {
  const [selectedItem, setSelectedItem] = useState<TimelineItemProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = (item: TimelineItemProps) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-8">{title}</h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            onShowMore={() => handleShowMore(item)}
          />
        ))}
      </div>
      
      <DetailsModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export { TimelineItem, Timeline };
export type { TimelineItemProps, TimelineProps };