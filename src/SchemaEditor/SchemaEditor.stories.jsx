import React from 'react';
import { storiesOf } from '@storybook/react';
import SchemaEditor from './index.jsx';

storiesOf('SchemaEditor', module)
  .add('basic usage', () => (<SchemaEditor />));
