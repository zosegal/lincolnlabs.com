# lincolnlabs.com

## Getting Started

### Installing
You will need Node.js.

Then run:

    npm install -g docpad
    npm install
    docpad install partials

### Running
    
    ulimit -n 8192 # Yeah, we have lots of files now.
    docpad run

[Open http://localhost:9778/](http://localhost:9778/) and you'll see the site!

## Deploying

You'll need a plugin to deploy:

    docpad install ghpages

Then run:

    docpad deploy-ghpages --env static

## Docker notes

Build

    docker build -t lincolnlabs/lincolnlabs .

Run

    docker run -d -p 80:80 -p 4040:4040 lincolnlabs/lincolnlabs
