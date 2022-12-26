/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2021-07-26
 * @FilePath: \antd_prod:\products\react_antd_components\src\routes\PagesRoute.tsx
 * @Description: 路由导航
 */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { pagesRoute } from '../utils/routesList';
import DivLoading from '../components/CutomLoading';
const PagesRoute: React.FunctionComponent<any> = (props) => {
  const [redirect, setRedirect] = useState(''); // 判度是否进入
  useEffect(() => {
    // setTimeout(() => {
    setRedirect('/login');
    // }, 500);
  }, []);
  return redirect ? (
    <Router>
      <Switch>
        {pagesRoute.map((item, key) => {
          return (
            <Route
              exact={item.exact}
              path={item.path}
              component={item.component}
              key={item.key}
            ></Route>
          );
        })}
        <Redirect exact from="/" to={redirect}></Redirect>
      </Switch>
    </Router>
  ) : (
    <DivLoading />
  );
};
export default PagesRoute;
