import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Header, Nav, Link } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<div></div>}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
};

export default Layout;
