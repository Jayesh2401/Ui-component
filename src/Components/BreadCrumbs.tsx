import { FC, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumb {
  routes?: Route[];
  separator?: any;
  color?: string;
}

interface Route {
  href: string;
  label: string;
}

const BreadCrumbs: FC<BreadCrumb> = ({ routes, separator, color }) => {
  const location = useLocation();
  const dynamicRoutes = location.pathname.split("/");
  // console.log('Routes', Routes);

  return (
    <div>
      <div className="flex gap-x-2">
        {routes
          ? routes.map((route, index) => {
            return (
              <Fragment key={index}>
                {index < dynamicRoutes.length - 1 ? (
                  <Link
                    style={{
                      color: color || "blue",
                    }}
                    to={route.href || "/"}
                  >
                    {route.label || "Home"}
                  </Link>
                ) : (
                  <div>{route.label || "Home"}</div>
                )}
                {index < dynamicRoutes.length - 1 && (
                  <div className="divider">
                    {typeof separator == "string"
                      ? separator
                      : typeof separator == "object"
                        ? separator
                        : separator()}
                  </div>
                )}
              </Fragment>
            );
          })
          : dynamicRoutes.map((route, index) => {
            return (
              <Fragment key={index}>
                {index < dynamicRoutes.length - 1 ? (
                  <Link
                    style={{
                      color: color || "blue",
                    }}
                    to={route || "/"}
                  >
                    {route || "Home"}
                  </Link>
                ) : (
                  <div>{route || "Home"}</div>
                )}
                {index < dynamicRoutes.length - 1 && (
                  <div className="divider">
                    {typeof separator == "string"
                      ? separator
                      : typeof separator == "object"
                        ? separator
                        : separator()}
                  </div>
                )}
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
