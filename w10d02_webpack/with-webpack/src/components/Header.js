import React from 'react';

const Header = (props) => {
  const {links, ...rest} = props;
  const clickLinks = links.map((link, i) => {
    return React.createElement('a', {key: i, href: link.path}, link.name)
  })

  return React.createElement('header', {...rest}, 
    React.createElement('h2', null, "Cool Clarissa's Calculated Checkout Desk"),
    React.createElement('nav', null, ...clickLinks) 
  )
};

export default Header;