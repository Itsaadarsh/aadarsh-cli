#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");
const showBanner = require("node-banner");

const ui = importJsx("./ui");

const cli = meow(`
	Usage
	  $ test

	Options
		--name  Your name

	Examples
	  $ test --name=Jane
	  Hello, Jane
`);

(async () => {
	await showBanner(
		"Aadarsh",
		"Modern Full Stack Developer | System Design / Open Source Enthusiast"
	);
})();

render(React.createElement(ui, cli.flags));
