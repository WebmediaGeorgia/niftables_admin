import React, { FunctionComponent } from 'react';

import Butterfly from './Butterfly';
import Parrot from './Parrot';

interface OwnProps {}

type Props = OwnProps;

const ParrotAndButterfly: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Butterfly />

      <Parrot />
    </>
  );
};

export default ParrotAndButterfly;
