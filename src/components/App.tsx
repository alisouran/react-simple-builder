import { Fragment, useState } from 'react';
import { useCodesContext, useWidgetsContext } from '../context';
import Blocks from './Blocks';
import CodeSection from './Code';
import ComponentsList from './ComponentsList';
import Edit from './Edit';
import Switcher from './Switcher';

const App = () => {
  const [switcher, setSwitcher] = useState('component');
  const { widgets } = useWidgetsContext();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          {switcher === 'code' ? (
            <CodeSection />
          ) : (
            widgets.map((widget: any) => {
              const WidgetComponent = Blocks[widget.type];
              return (
                <Fragment key={widget._id}>
                  <WidgetComponent {...widget} />
                </Fragment>
              );
            })
          )}
        </div>
        <div className="col-span-3">
          <Switcher switcherState={[switcher, setSwitcher]} />
          {switcher === 'component' && <ComponentsList />}
          {switcher === 'edit' && <EditSection />}
        </div>
      </div>
    </div>
  );
};

const EditSection = () => {
  const { widgets, setWidgets } = useWidgetsContext();
  const { codes } = useCodesContext();
  console.log(codes);
  const handleRemove = (widget: any) => {
    const newCodes = widgets.filter((t: any) => t !== widget);
    setWidgets(newCodes);
  };
  const arrayMove = (arr: any, fromIndex: number, toIndex: number) => {
    const newCodes = [...widgets];
    const element = newCodes[fromIndex];
    newCodes.splice(fromIndex, 1);
    newCodes.splice(toIndex, 0, element);
    setWidgets(newCodes);
  };
  return (
    <>
      {widgets.map((widget: any) => {
        const EditComponent = Edit[widget.type];
        const indexOf = widgets.indexOf(widgets.find((s: any) => s._id === widget._id));
        return (
          <div className="block pt-3">
            <div className="flex">
              <button
                onClick={() => {
                  let conf = confirm('Are you sure you want to Delete this component?');
                  if (conf) {
                    handleRemove(widget);
                  }
                }}
                className="flex-1 border-gray-100 border-2"
              >
                DELETE
              </button>
              <button
                onClick={() => arrayMove(widgets, indexOf, indexOf - 1)}
                className="flex-1 border-gray-100 border-2"
              >
                UP
              </button>
              <button
                onClick={() => arrayMove(widgets, indexOf, indexOf + 1)}
                className="flex-1 border-gray-100 border-2"
              >
                DOWN
              </button>
            </div>
            <EditComponent widget={widget} />
          </div>
        );
      })}
    </>
  );
};

export default App;
