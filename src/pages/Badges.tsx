import BadegsComponent from "../Components/BadegsComponent";

function Badges() {
  return (
    <div className="flex gap-2">
      <BadegsComponent
        text="check"
        // backgroundColor="bg-blue-500"
        borderColor="border-gray-400"
        icon={<span className="flex h-2 w-2 rounded-full bg-gray-400"></span>}
        textColor="text-gray-600"
        className=""
      />

      <BadegsComponent
        text="Warning"
        backgroundColor="bg-yellow-200"
        borderColor="border-yellow-400"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        }
        textColor="text-black"
      />
    </div>
  );
}

export default Badges;
