import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  // Parse initial route from location.hash or path
  const getInitialState = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (!hash || hash === '') return { route: 'landing', params: {} };
    
    const [pathPart, queryPart] = hash.split('?');
    const params = {};
    if (queryPart) {
      const sp = new URLSearchParams(queryPart);
      for (const [k, v] of sp.entries()) {
        params[k] = v;
      }
    }
    return { route: pathPart || 'landing', params };
  };

  const [current, setCurrent] = useState(getInitialState);

  const navigate = (newRoute, newParams = {}) => {
    setCurrent({ route: newRoute, params: newParams });
    const query = new URLSearchParams(newParams).toString();
    const hashStr = `#/${newRoute}${query ? `?${query}` : ''}`;
    window.history.pushState({ route: newRoute, params: newParams }, '', hashStr);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.route) {
        setCurrent({ route: e.state.route, params: e.state.params || {} });
      } else {
        setCurrent(getInitialState());
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ route: current.route, params: current.params, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
};
