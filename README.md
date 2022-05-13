# Node.js Server with Fake Data

## Description & Installation

This is a quick server I set up to return some mock data from [mockaroo](https://www.mockaroo.com/)

It was set up to demonstrate some skills in node.js

To use and expose to the public, configure your router to allow port-forwarding and a static ip address for the computer to be used as a server.

Change the `HOSTNAME` and `PORT` to that supplied from the router config 

Then use
```bash
npm install -g localtunnel

lt --port <specified_port_in_router_config>
```
This will give you a publicly accessible URL

```bash
curl https://<your-endpoint-or-ip>/help
```
The above will give a list of the current endpoints and the allowed methods on each
