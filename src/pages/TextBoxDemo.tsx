import InputField from '../Components/TextBox';

const TextBoxDemo = () => {

  return (
    <div>
      <InputField label='Name' className='w-[350px]' type='text' required placeholder='Enter name' />
    </div>
  );
};

export default TextBoxDemo;
