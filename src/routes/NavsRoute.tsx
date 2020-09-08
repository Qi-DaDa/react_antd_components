/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2020-09-08
 * @FilePath: \myantdd:\products\react_antd_components\src\routes\navsRoute.tsx
 * @Description: 路由导航
 */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { navsRoute } from '../utils/routesList';
import DivLoading from '../components/CutomLoading';

const NavsRoute = () => {
  return (
    <>
      {navsRoute.map((item, key) => {
        return (
          <Route
            exact={item.exact}
            path={item.path}
            component={item.component}
            key={item.key}
          ></Route>
        );
      })}
      <Redirect exact from="/" to={navsRoute[0].path}></Redirect>;
    </>
  );
};
export default NavsRoute;
