import React from "react";
import AccordionContainer from "../Components/CommonAccordian";
import PlusIcon from "../utils/customsvg";

const Accordian: React.FC = () => {
  interface AccordionData {
    title: string;
    content: React.ReactNode;
  }

  const initialAccordionData: AccordionData[] = [
    { title: "Accordion Item 1", content: "Content for Accordion Item 1" },
    {
      title: "Accordion Item 2",
      content: (
        <p style={{ fontWeight: "bold" }}>
          Content for Accordion Item 2{" "}
          <span style={{ color: "black" }}>hhh</span>{" "}
        </p>
      ),
    },
    { title: "Accordion Item 2", content: "Content for Accordion Item 3" },
  ];

  return (
    <AccordionContainer
      data={initialAccordionData}
      showMultiple={false}
      listClass="test_accordian"
      contentClass="test_accordian2"
      icon={<PlusIcon />}
    />
  );
};

export default Accordian;
