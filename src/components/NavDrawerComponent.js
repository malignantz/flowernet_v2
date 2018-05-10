import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers/NavigationDrawer";
import NavLink from "./NavLink";
import navItems from "./../navItems";

class NavDrawerComponent extends Component {
  render() {
    this.navItems = navItems;
    return (
      <NavigationDrawer
        navItems={this.navItems.map(props => (
          <NavLink {...props} key={props.to} />
        ))}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarTitle="Flowernet Crashpads"
        contentId="main-content"
        contentClassName="md-grid"
        drawerTitle=":-D"
      >
        {this.props.children}
      </NavigationDrawer>
    );
  }
}

export default NavDrawerComponent;
