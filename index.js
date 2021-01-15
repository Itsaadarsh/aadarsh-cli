#!/usr/bin/env node
'use strict';

const React = require('react');
const importJsx = require('import-jsx');
const { render } = require('ink');
const showBanner = require('node-banner');

const ui = importJsx('./ui');

(async () => {
  await showBanner(
    '@itsaadarsh',
    'Modern Full Stack Developer | System Design / Open Source Enthusiast',
    'cyan',
    'green'
  );
})();

render(React.createElement(ui));
