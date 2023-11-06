import { toast } from "../Components/Toaster";

const ToasterDemo = () => {
  return (
    <div>
      {/* <Toaster position='top-left' type='error' /> */}
      <button
        onClick={() => toast("error", "top-right", "This is viram choksi")}
      >
        {" "}
        Click
      </button>
    </div>
  );
};

export default ToasterDemo;
