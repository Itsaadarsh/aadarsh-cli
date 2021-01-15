'use strict';
const React = require('react');
const SelectInput = require('ink-select-input').default;
const { Box, Text } = require('ink');
const open = require('open');

const Counter = () => {
  const handleSelect = item => {
    if (item.label === '| EXIT |') {
      process.exit();
    } else if (item.value) {
      open(item.value);
    }
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
    {
      label: '--------',
      value: 'Null1',
    },
    {
      label: '| EXIT |',
      value: 'quit action',
    },
    {
      label: '--------',
      value: 'Null2',
    },
  ];

  return (
    <Box justifyContent='center' borderStyle='round' borderColor='cyanBright' width='50%'>
      <SelectInput items={socialsList.map(ele => ({ ...ele, key: ele.value }))} onSelect={handleSelect} />
    </Box>
  );
};

module.exports = Counter;
