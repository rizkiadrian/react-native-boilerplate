import React from 'react';
import Text from 'src/components/atoms/Text';
import renderer from 'react-test-renderer';

it(`src/components/atoms/Text Component render correctly`, () => {
  const tree = renderer.create(<Text>Dream</Text>);
  expect(tree).toMatchSnapshot();
});
