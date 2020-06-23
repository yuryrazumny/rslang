import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import css from './Header.module.css';
import HeaderListItem from './HeaderListItem';
import HeaderMenuLink from './HeaderMenuLink';

const links = [
  {
    title: 'Особенности',
    path: '/features'
  },
  {
    title: 'Игры',
    path: '/games'
  },
  {
    title: 'Метод интервального повторения',
    path: '/method'
  },
  {
    title: 'О команде',
    path: '/team'
  }
];

function createLink ({ title, path }) {
  return (
    <HeaderListItem key={title}>
      <HeaderMenuLink href={path}>{title}</HeaderMenuLink>
    </HeaderListItem>
  );
}

createLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home" className={css.logo}>RS Lang</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {links.map(createLink)}
        </Nav>
        <Form inline>
          <Button className={css.enter_btn}
                  variant="outline-success">Войти</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
