import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import "./Navigation.scss"

const { useState, useRef, useEffect } = React;

const MenuItems = [
  {
    name: "Chat",
    slug: "one"
  },
  {
    name: "Buy items",
    slug: "two"
  },
  {
    name: "Your cart",
    slug: "three"
  },
  {
    name: "Contact us",
    slug: "four"
  }
];

const MenuItem = (props) => {
  const { item, selected = false, onItemSelect } = props;

  return (
    <div
      className={`menu-item ${selected ? "menu-item--selected" : ""}`}
      data-slug={item.slug}
      onClick={() => {
        onItemSelect(item);
      }}
    >
      {item.name}
    </div>
  );
};

const Menu = (props) => {
  const { items, onSelectedItem, initialItemSlug = null } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItemsRef = useRef();
  const selectedItemRef =
    menuItemsRef.current && selectedItem
      ? menuItemsRef.current.querySelector(`[data-slug=${selectedItem.slug}]`)
      : null;

  const calculateDashPosition = (element, dashWidth) => {
    return element.offsetLeft + element.offsetWidth / 2 - dashWidth / 2;
  };

  const calculateDashWidth = (element) => {
    return element.offsetWidth;
  };

  const dashWidth = selectedItemRef ? calculateDashWidth(selectedItemRef) : 0;

  const dashPosition = selectedItemRef
    ? calculateDashPosition(selectedItemRef, dashWidth)
    : 0;

  const selectItem = (item) => {
    setSelectedItem(item);
    onSelectedItem(item);
  };

  useEffect(() => {
    const initialItem = initialItemSlug
      ? items.find((item) => item.slug === initialItemSlug)
      : items[0];
    setSelectedItem(initialItem);
  }, []);

  const renderItems = items.map((item) => (
    <MenuItem
      item={item}
      selected={selectedItem && selectedItem.slug === item.slug}
      onItemSelect={selectItem}
    />
  ));

  return (
    <div className="menu">
      <div className="menu-items" ref={menuItemsRef}>
        {renderItems}
        <div
          className="menu-dash"
          style={{
            width: dashWidth,
            transform: `translate3d(${dashPosition}px, 0 , 0)`
          }}
        />
      </div>
    </div>
  );
};
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/");
    }
    return (<>
        <div className="takelessspace">
         <Navbar bg="light" expand="lg">
             <Container>
                 <LinkContainer to="/">
                     <Navbar.Brand>
                         <img src="https://s3.gifyu.com/images/E-dukan-3.gif" style={{ width: 50, height: 50 }} />
                     </Navbar.Brand>
                 </LinkContainer>
                 <div className="app">
      <Menu
        items={MenuItems}
        onSelectedItem={(item) => {
          console.log("Selected item", item);
        }}
        initialItemSlug={MenuItems[2].slug}
      />
    </div>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ms-auto">
                         {!user && (
                             <LinkContainer to="/login">
                                 <Nav.Link>Login</Nav.Link>
                             </LinkContainer>
                         )}
                         {/* <LinkContainer to="/chat">
                             <Nav.Link>Chat</Nav.Link>
                         </LinkContainer> */}
                         
                         {user && (
                             <NavDropdown
                                 title={
                                     <>
                                         <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
                                         {user.name}
                                     </>
                                 }
                                 id="basic-nav-dropdown"
                             >
                                 <NavDropdown.Item href="#action/3.1">View profile</NavDropdown.Item>


                                 <NavDropdown.Item>
                                     <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavDropdown.Item>
                         </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
             </Container>
         </Navbar>
         </div>
         </>
    );
}

export default Navigation;
