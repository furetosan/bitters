Bitters
=======

Bitters is a simple-as-possible blogging platform built in the spirit of Livejournal.

> Because if you were angsty in 1999, you're bitter now.

Bitters uses Express, Jade, Stylus, and Embittered to render a beautiful self-hosted opensource blogging platform for you (and in the future, your friends.)

Bitters came into existence because of increasing frustration levels with blogging platforms and centralized publishing services. Bitters aims to liberate by giving them all of the tools they need to deploy their own blogging platform.

### Quick install using Node.js

First, install [Node.js](http://nodejs.org/)

	$ git clone https://github.com/evbogue/bitters.git
	$ cd bitters
	$ npm install
	$ node app.js

Navigate to [http://localhost:7777/](http://localhost:7777/) to see your bitters.

### Editing Bitters

Right now, Bitters uses Git to maintain content

Edit the readme.md file to change the contents of the main content frame. 

Edit /views/sidebar.jade to edit the contents of the sidebar.

### Deploy Bitters

You'll need a vps with Node.js installed to deploy Bitters. We recommend [Digital Ocean](https://www.digitalocean.com/?refcode=26d8ed49730d) (rewards link)
