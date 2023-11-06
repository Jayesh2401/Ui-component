import { Disclosure, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface AccordionData {
    title: string;
    content: string;
}
interface AccordionItemProps {
    title: string;
    content: any;
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
    showMultiple?: boolean;
}
interface dataProp {
    data: AccordionData[];
    className?: string;
    showMultiple?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle, className, showMultiple }) => {
    return (
        <div className="w-full ">
            <div className="mx-auto w-full  rounded-2xl bg-white p-2">
                <Disclosure>
                    {(
                        <>
                            <Disclosure.Button onClick={() => onToggle()} style={{

                            }} className={`flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${className}`}>
                                <span>{title}</span>
                                <ChevronUpIcon
                                    className={`${!isOpen ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Transition
                                {...(!showMultiple && { show: isOpen })}
                                enter="transition duration-300 ease-in"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-0 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    {content}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

const AccordionContainer: React.FC<dataProp> = ({ data, className, showMultiple = false }) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    console.log(data);

    return (
        <div className="container mx-auto">
            {data?.map((item: AccordionData, index: number) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => toggleAccordion(index)}
                    className={className}
                    showMultiple={showMultiple}
                />
            ))}
        </div>
    );
};

export default AccordionContainer;
