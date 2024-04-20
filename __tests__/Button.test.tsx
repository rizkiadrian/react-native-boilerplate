/**
 * Mock React Native Linear Gradient due to compiling error on jest
 */
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

import React from 'react';
import Button from 'src/components/molecules/Button';
import renderer from 'react-test-renderer';

it(`src/components/molecules/Button Component render correctly`, () => {
  const tree = renderer.create(<Button label="dream" />);
  expect(tree).toMatchSnapshot();
});
