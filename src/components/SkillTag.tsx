interface SkillTagProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ 
  children, 
  size = 'md', 
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full bg-white border border-gray-200 shadow text-black";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-3 py-1.5 text-sm", 
    lg: "px-4 py-2 text-base"
  };

  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <span className={finalClasses}>
      {children}
    </span>
  );
};

export default SkillTag;