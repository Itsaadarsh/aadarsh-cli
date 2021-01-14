import React from 'react';
import { render, Text } from 'ink';
const open = require('open');
const SelectInput = require('ink-select-input').default;

const Counter = () => {
  const handleSelect = item => {
    open(item.value);
  };
  const socialsList = [
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/itsaadarsh',
    },
    {
      label: 'Twitter',
      value: 'https://twitter.com/itsaadarsh_',
    },
    {
      label: 'Instagram',
      value: 'https://www.instagram.com/itsaadarsh/',
    },
    {
      label: 'Github',
      value: 'https://github.com/itsaadarsh',
    },
    {
      label: 'Portfolio',
      value: 'https://itsaadarsh.github.io',
    },
  ];

  return <SelectInput items={socialsList} onSelect={handleSelect} />;
};

render(<Counter />);
