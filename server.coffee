express  = require("express")
process  = require('child_process')
spawn    = process.spawn
exec     = process.exec
execFile = process.execFile

expressServer = express()

class Server

  child: null

  restart: ->

    spawn("git", ["pull"]).on 'close', =>

      spawn("npm", ["install"]).on "close", =>

        spawn("docpad", ["generate"]).on "close", =>

          spawn("coffee", [
            "-c"
            "./app.coffee"
          ]).on "close", =>

            spawn('forever', ['stop', @app]).on 'close', =>

              @child.kill() if @child

              @start('app.js')

              return

            return

          return

        return

      return

  start: (app) ->

    @app = app

    @child = spawn('forever', ['start', @app])

    @child.stdout.setEncoding 'utf8'

    @child.stdout.on 'data', (data) ->
      str = data.toString()
      console.log str

      return

    @child.on 'close', (code) ->
      console.log 'process exit code ' + code

      return

server = new Server

server.restart('app.js')

expressServer.post "/github/callback", (req, res) ->

  console.log "Github posthook received"

  server.restart('app.js')

expressServer.listen 4030
