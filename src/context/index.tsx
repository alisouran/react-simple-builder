import { createContext, useContext, useEffect, useState } from 'react';

const WidgetsContext = createContext<any>(null);
const CodesContext = createContext<any>(null);

const AppContext = ({ children }: { children: any }) => {
  const [widgets, setWidgets] = useState<any>([]);
  const [codes, setCodes] = useState<any>([]);

  useEffect(() => {
    setWidgets(JSON.parse(window.localStorage.getItem('souran-page-builder') ?? '[]'));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('souran-page-builder', JSON.stringify(widgets));
  }, [widgets]);

  return (
    <CodesContext.Provider value={{ codes, setCodes }}>
      <WidgetsContext.Provider value={{ widgets, setWidgets }}>{children}</WidgetsContext.Provider>
    </CodesContext.Provider>
  );
};

export default AppContext;

export const useWidgetsContext = () => useContext(WidgetsContext);
export const useCodesContext = () => useContext(CodesContext);
