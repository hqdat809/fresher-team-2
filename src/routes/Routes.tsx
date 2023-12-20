import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Test = React.lazy(() => import("../pages/TestPage"));

const Routes = () => {
  const rootRouter = createBrowserRouter([{ element: <Test />, path: "/" }]);

  return (
    // <React.StrictMode>
    <Suspense>
      <RouterProvider router={rootRouter} />
    </Suspense>
    // </React.StrictMode>
  );
};

export default Routes;
