import React, { useState, ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
  className?: string | null;
}

const Tab: React.FC<TabProps> = ({ children, className }) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

interface TabbinationProps {
  children: ReactNode;
  className?: string | null;
  activeClass?: string | null;
}

interface TabbinationComponent extends React.FC<TabbinationProps> {
  Tab: React.FC<TabProps>;
}

const Tabbination: TabbinationComponent = ({
  children,
  className,
  activeClass,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const { label } = child.props;
            const isActive = index === activeTab;
            return (
              <button
                className={`
              px-4 py-2 mx-2 focus:outline-none ${className || ""}
              ${isActive && ` border-b-2 border-blue-500 ${activeClass}`}
                  `}
                onClick={() => setActiveTab(index)}
              >
                {label}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

Tabbination.Tab = Tab;

export default Tabbination;
