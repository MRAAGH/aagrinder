# AAGRINDER
2D sanbox multiplayer game you can play in the browser

# How can I play?
You need to know a link to an aagrinder server.

You just enter this link into your browser and start playing!
It is that simple! :D

# How to find a server?
I don't have a public server, and I don't know of any other servers.
I will probably set one up in the future.
Right now, I suggest waiting. Check back in a few months to see if this readme has changed.

# How to run a server?
You need a mysql database running, for storing account data.
This may change in the future if authentication becomes centralized,
and then you won't need your own database.

You need to install [node.js](https://nodejs.org/en/).

```
$ git clone https://github.com/MRAAGH/aagrinder.git
$ cd aagrinder
$ npm install
$ npm start
```

A server.properties file will be created.
You can open and modify it as you wish, then restart the server.

You also need to configure ports and IP's if you want others to be able to connect.
But this is advanced stuff.
If you don't know what I am talking about, maybe you should find someone else to host the server ^.^

# How finished is the game?
Very unfinished at this point.

At the time of writing this, you can't even move properly
and there is no inventory.

But at least you can register, log in, chat,
break stuff and see how other players are also breaking stuff, yay
