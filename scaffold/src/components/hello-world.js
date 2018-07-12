import React from 'react';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import Button from 'carbon-react/lib/components/button';

// A basic demonstration of a React component:
const HelloWorld = () => (
  <AppWrapper>
    <h1>Hello world!</h1>

    <Button onClick={ sayHello }>
      Click me!
    </Button>
  </AppWrapper>
);

function sayHello() {
  alert('Hello world!');
}

export default HelloWorld;
