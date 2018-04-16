import React from 'react';

function MyStyledComponent(props) {
  var myStyledComponentStyles = {
    backgroundColor: 'firebrick',
    color: 'white',
    fontFamily: 'cursive',
    paddingTop: '40px'
  }
  return (
    <div style={myStyledComponentStyles}>
      <h1>Hey, I'm a stupid idiot</h1>
      <h2>But there's something different about me...</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right</p>
      <hr/>
    </div>
  );
}

export default MyStyledComponent;
