import React, { MouseEventHandler, ReactNode } from 'react';

interface IconProps {
    color: string;
    currTheme:Boolean;
    isActive: boolean;
    onClick?:  MouseEventHandler<HTMLDivElement>;
    children: ReactNode;
  }
  

const Icon: React.FC<IconProps> = ({currTheme, color, isActive, children, onClick }) => {
  return (
    <div className={`p-1 rounded cursor-pointer ${currTheme && isActive ? 'bg-[#2F3030]' : '' } ${!currTheme && isActive ? "bg-gray-400":'' }`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Icon;
