# - Dependencies
express = require("express")
hbs     = require("hbs")
path    = require("path")
util    = require("util")
server  = express()
port    = 4040

bodyParser = require 'body-parser'
directory  = require 'serve-index'
logger     = require 'morgan'
staticDir  = require 'serve-static'

# - Server Settings
server.set "view engine", "hbs"
server.engine "hbs", hbs.__express
server.use staticDir __dirname + "/out"
server.use logger("dev")
server.use bodyParser()

# - Start Up Server
server.listen port

util.log "Express server instance listening on port " + port
