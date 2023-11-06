import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import "../Accordian.css";
import PlusIcon from "../utils/customsvg";

interface AccordionData {
  title: string;
  content: React.ReactNode;
}
interface AccordionItemProps {
  title: string;
  content: any;
  icon?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  listClass?: string;
  contentClass?: string;
  showMultiple?: boolean;
}
interface dataProp {
  data: AccordionData[];
  listClass?: string;
  contentClass?: string;
  icon?: React.ReactNode;
  showMultiple?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  icon,
  listClass,
  contentClass,
  showMultiple,
}) => {
  return (
    <div className="Accordian_container">
      <div className="Accordian_wrapper">
        <Disclosure>
          {
            <>
              <Disclosure.Button
                onClick={() => onToggle()}
                className={`Accordian_list ${listClass}`}
              >
                <span>{title}</span>
                {icon || (
                  <ChevronUpIcon
                    className={`arrow ${!isOpen ? "arrow_180" : ""}`}
                  />
                )}
                {/* <ChevronUpIcon
                  className={`arrow ${!isOpen ? "arrow_180" : ""}  `}
                /> */}
              </Disclosure.Button>
              <Transition
                {...(!showMultiple && { show: isOpen })}
                enter="Accordian_enter"
                enterFrom="Accordian_enterFrom"
                enterTo="Accordian_enterTo"
                leave="Accordian_leave"
                leaveFrom="Accordian_leaveFrom"
                leaveTo="Accordian_leaveTo"
              >
                <Disclosure.Panel
                  className={`Accordian_content ${contentClass}`}
                >
                  {content}
                </Disclosure.Panel>
              </Transition>
            </>
          }
        </Disclosure>
      </div>
    </div>
  );
};

const AccordionContainer: React.FC<dataProp> = ({
  data,
  listClass,
  contentClass,
  icon,
  showMultiple = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (showMultiple) {
      if (openIndex.includes(index)) {
        setOpenIndex(openIndex.filter((i) => i !== index));
      } else {
        setOpenIndex([...openIndex, index]);
      }
    } else {
      setOpenIndex([index]);
    }
  };

  return (
    <div className="mi_container">
      {data?.map((item: AccordionData, index: number) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex.includes(index)}
          onToggle={() => toggleAccordion(index)}
          listClass={listClass}
          contentClass={contentClass}
          icon={icon}
          showMultiple={showMultiple}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
