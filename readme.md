Bitters
=======

Bitters is a simple-as-possible blogging platform built with Node.js, in the style of Livejournal.

> Because if you were angsty in 1999, you're bitter now.

Bitters uses Express, Jade, Stylus, and Embittered to render a beautiful self-hosted opensource blogging platform for you (and in the future, your non-programmy friends).

Bitters came into existence because of increasing frustration with bloated blogging software and dishonest centralized publishing services. Bitters aims to liberate the user by giving them all the tools they need to deploy their own modular blogging platform using Node.js.

### Quick install

You're looking at Bitters right now. To get your own Bitters, 

**1** install [Node.js](http://nodejs.org/)

**2** type these commands into your terminal

	$ git clone https://github.com/evbogue/bitters.git
	$ cd bitters
	$ npm install
	$ node app.js

**3** navigate to [http://localhost:7777/](http://localhost:7777/) to see your bitters

### Editing Bitters

Bitters uses Git to maintain content.

To change the contents of the main frame

	$ vim readme.md 

To change the contents of the sidebar

	$ vim sidebar.jade

### Deploy Bitters

You'll need a VPS with Node.js installed to deploy Bitters. We recommend [Digital Ocean](https://www.digitalocean.com/?refcode=26d8ed49730d) (rewards link). Get a Linux VPS for only $5 a month.

### Bitters Development

Our aim is to keep the Bitters core small, while implementing the features we believe are important to bringing Bitters to more people.

If you'd like to hack on Bitters keep in mind the following development goals. We will merge your pull request if it furthers these goals. Bug fixes are always welcome.

1. Implement Leveldb on the backend (using levelup/leveldown)
2. User authentication (passport.js?)
3. Front-end editable (like Zenpen)

Chat with the dev team at #bitters on irc.freenode.net

### Contribute to Bitters development

The best way to support Bitters development is to buy the development team tacos.

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=559FYH7NGSMKC"><button>Contribute to Bitters</button></a>

Your contribution of $99 supports local Oakland taco trucks for one week.
Your contribution of $299 supports local Oakland taquerias for one month.

+ **Current mood:** Bitter
+ **Current location:** The woods
