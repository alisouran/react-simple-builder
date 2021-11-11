import { useWidgetsContext } from '../../../context';

const EditWidget = ({ widget }: { update: any; widget: any }) => {
  const { widgets, setWidgets } = useWidgetsContext();
  return (
    <>
      <input
        className={'w-full border-2 border-gray-500'}
        placeholder="title"
        data-id={widget._id}
        value={widget.title}
        onChange={(e) => {
          const newWidgets = [...widgets];
          newWidgets[widgets.indexOf(widgets.find((s: any) => s._id === widget._id))] = {
            ...widgets.find((s: any) => s._id === widget._id),
            title: e.target.value,
          };
          setWidgets(newWidgets);
        }}
      />
    </>
  );
};

export default EditWidget;
