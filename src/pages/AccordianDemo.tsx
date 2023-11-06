import React from 'react';
import AccordionContainer from '../Components/Accordian';

const App: React.FC = () => {

    interface AccordionData {
        title: string;
        content: string;
    }

    const initialAccordionData: AccordionData[] = [
        { title: 'Accordion Item 1', content: 'Content for Accordion Item 1' },
        { title: 'Accordion Item 2', content: 'Content for Accordion Item 2' },
        { title: 'Accordion Item 2', content: 'Content for Accordion Item 3' },
        // Add more accordion items as needed
    ];

    return (
        <div className="container mx-auto ">
            <AccordionContainer data={initialAccordionData} showMultiple />
        </div>
    );
};

export default App;
