import AccordionContainer from '../Components/Accordian';
import { Meta, Story } from '@storybook/addon-docs';

export default {
  title: 'Accordian component',
  component: AccordionContainer,
  tags: ['autodocs'],
  argTypes: {
    data: {
      type: 'array',
      description:
        'An array of accordion items. Each accordion item must have a `title` and `content` property.',
    },
    // className: {
    //   type: 'string',
    //   description:
    //     'An additional class name to be applied to the accordion container',
    // },
    showMultiple: {
      type: 'boolean',
      default: false,
      description:
        'Whether or not multiple accordion items can be open at the same time',
    },
  },
};

const initialAccordionData = [
  { title: 'Accordion Item 1', content: 'Content for Accordion Item 1' },
  { title: 'Accordion Item 2', content: 'Content for Accordion Item 2' },
  { title: 'Accordion Item 2', content: 'Content for Accordion Item 3' },
];

const Template = (args) => <AccordionContainer {...args} />;

<Story name='Multi-open accordion'>
  <AccordionContainer
    data={initialAccordionData}
    showMultiple={true}
    className='!bg-blue-500 !text-white'
  />
</Story>;

export const DefaultAccordian = Template.bind({});
DefaultAccordian.args = {
  data: initialAccordionData,
};

export const MultiOpenAccordian = Template.bind({});
MultiOpenAccordian.args = {
  data: initialAccordionData,
  showMultiple: true,
};

// export const StyledAccordian = Template.bind({});
// StyledAccordian.args = {
//   data: initialAccordionData,
//   showMultiple: true,
//   className: '!bg-yellow-500 !text-white',
// };

// export const GradientAccordian = Template.bind({});
// GradientAccordian.args = {
//   data: initialAccordionData,
//   showMultiple: true,
//   className: '!bg-gradient-to-r !from-[#12c2e9] !to-[#c471ed]',
// };
