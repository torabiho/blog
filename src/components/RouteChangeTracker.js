import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
const RouteChangeTracker = ({ location }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  }, [pathname]);

  return <div></div>;
};

export default RouteChangeTracker;
