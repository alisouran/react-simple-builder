import { useWidgetsContext } from '../context';

const ComponentsList = () => {
  const { widgets, setWidgets } = useWidgetsContext();
  const defaults = {
    widget: {
      _id: new Date().getTime(),
      type: 'widget',
      title: 'Alireza',
      code: ''
    },
  };
  return (
    <>
      <div className={`flex list-of-components-container`}>
        <button
          onClick={() => {
            setWidgets((widgets: any) => [...widgets, defaults.widget]);
          }}
          className={'list-of-components-items'}
        >
          Add A Widget
        </button>
      </div>
      {widgets.length > 0 && (
        <button
          className="border-red-600 border-2 bg-gray-100 pr-2 pt-1 pb-1 pl-2 mr-auto ml-auto block mt-6"
          onClick={() => {
            const conf = confirm('Are you sure you want to clear all elements?');
            if (conf) {
              setWidgets([]);
            }
          }}
        >
          Remove All Elements
        </button>
      )}
    </>
  );
};

export default ComponentsList;
