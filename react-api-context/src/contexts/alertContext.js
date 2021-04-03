import React, { useCallback, useEffect, useState, createContext } from "react";

const AlertContext = createContext();

export default AlertContext;

export function AlertContextProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts) => alerts.slice(1)),
        2000
      );
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const addAlert = useCallback(
    function (alert) {
      setAlerts((alerts) => [...alerts, alert]);
    },
    [setAlerts]
  );

  return (
    <AlertContext.Provider value={addAlert}>
      {children}
      <div className="alerts-wrapper">
        {alerts.map((alert) => (
          <div className="alert" key={alert}>
            {alert}
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
}
