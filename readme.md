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

You'll need a VPS with Node.js installed to deploy Bitters. We recommend [Digital Ocean](https://www.digitalocean.com/?refcode=178513b8d257) (rewards link). Get a Linux VPS for only $5 a month.

### Bitters Development Goals

Our aim is to keep the Bitters core small, while implementing the features we believe are important to bringing Bitters to more people.

Chat with the dev team at #bitters on irc.freenode.net

Our next development goal is to **add a front-end editable compose window and a backend database**. We're investigating database options and LevelDB is looking like the best candidate. 

There are two ways you can help the above come into the world.

**1** Submit merge requests. Prototype your proposed change on a branch of Bitters, and submit a request to merge the pull when you think it's ready.

**2** Contribute to Bitters development. Major breakthroughs happen with more funding. If you have money, send some our way. We'll use it to buy tacos and beer. Later, we'll attempt to drink our bitterness away while building a better way to publish.



<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AA4E78WA9Y3V2"><button>Contribute to Bitters</button></a>

+ **Current mood:** Bitter
+ **Current location:** The woods
