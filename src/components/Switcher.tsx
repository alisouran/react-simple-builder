const Switcher = ({ switcherState }: { switcherState: Array<any> }) => {
  const [switcher, setSwitcher] = switcherState;
  return (
    <div className="container mx-auto">
      <div className="flex">
        <button
          onClick={() => {
            setSwitcher('component');
          }}
          className="flex-1 border-gray-100 border-2"
        >
          Components
        </button>
        <button
          onClick={() => {
            setSwitcher('edit');
          }}
          className="flex-1 border-gray-100 border-t-2 border-b-2 border-r-2"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setSwitcher('code');
          }}
          className="flex-1 border-gray-100 border-t-2 border-b-2 border-r-2"
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default Switcher;
