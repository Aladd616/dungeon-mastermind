// ================================================
//  Navigation is the master component for the
// navigation bar, calling all the other components
// ================================================
import React from 'react';
import NavigationWrapper from './NavigationWrapper';
import MenuToggle from './MenuToggle';
import NavMenu from './NavMenu';

export default function Navigation(props) {
  // The menu bar's visibility state is handled here
  // so it can affect the menu items
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavigationWrapper {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <NavMenu isOpen={isOpen} />
    </NavigationWrapper>
  );
}
