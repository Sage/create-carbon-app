import React from 'react';
import { shallow } from 'enzyme';
import Button from 'carbon-react/lib/components/button';
import HelloWorld from './hello-world';

// Demonstration of a simple test for the HelloWorld component:
describe('HelloWorld', () => {
  const renderShallow = () => (
    shallow(<HelloWorld />)
  );

  it('renders a title and button', () => {
    const wrapper = renderShallow();
    expect(wrapper).toMatchSnapshot();
  });

  it('says hello on click of the button', () => {
    global.alert = jest.fn();
    const wrapper = renderShallow();
    wrapper.find(Button).simulate('click');
    expect(global.alert).toHaveBeenCalledWith('Hello world!');
  });
});
