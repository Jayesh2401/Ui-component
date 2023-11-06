import CommonTextarea from "../Components/CommonTextarea";

const TextArea: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Common Textarea Example</h1>
      <CommonTextarea
        variation="box"
        size="medium"
        label="Description"
        placeholder="Enter your description here"
        rows={5}
        className="text-red-800 min-h-[100px] resize-none"
        labelClass="text-xl"
        disable={false}
        containerClass="border-2 border-black "
      />
    </div>
  );
};

export default TextArea;
