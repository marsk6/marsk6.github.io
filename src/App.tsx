import React, { useEffect } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Provider, useDispatch } from 'react-redux';
import { Router, Redirect } from '@reach/router';
import { Header, SideBar, Footer } from '@/layout';
import { configureStore } from '@/redux';
import { setAllPostData } from '@/redux/action';
import { useSelector } from 'react-redux';
import GithubCorner from 'react-github-corner';
import '@/style/layout.scss';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const store = configureStore();

// TODO: 服务端渲染注入数据
function App() {
  const hasInit = useSelector((state) => state.site.hasInit);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!hasInit) {
      dispatch(setAllPostData());
    }
  }, []);
  return (
    <Root>
      <section className="layout container">
        <React.Suspense fallback={<main className="middle">Loading...</main>}>
          <Router className="middle">
            <Redirect from="/page" to="/" noThrow />
            <Redirect from="/post" to="/" noThrow />
            <Routes path="*" />
          </Router>
        </React.Suspense>
        <Header />
        <SideBar />
        <Footer />
      </section>
      <GithubCorner size="60" href="https://github.com/marsk6" />
    </Root>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
