# --------------------------------------------------------------------
#  Nginx + NodeJS server, supervisord
#
# * Nginx server is listening to port 80
# * Node server is accessible at port 4040
# * All servers are started and controlled by supervisord
# * Logrotate periodically checks and rotates nginx access logfile
# --------------------------------------------------------------------

FROM            ubuntu
MAINTAINER      Chris Abrams <mail@chrisabrams.com>

# Install ---------------------------------

RUN apt-get install -y curl wget python g++ make nginx supervisor logrotate

# Install pre-built Node 0.10.22

RUN wget http://nodejs.org/dist/v0.10.26/node-v0.10.26-linux-x64.tar.gz
RUN tar -xvzf node-v0.10.26-linux-x64.tar.gz
RUN rm node-v0.10.26-linux-x64.tar.gz

ENV PATH $PATH:/node-v0.10.26-linux-x64/bin

ADD app.coffee app.coffee
ADD package.json package.json
ADD server.coffee server.coffee

RUN npm install -g coffee-script docpad forever
ADD .docpad.cson .docpad.cson
RUN docpad help
RUN npm install
RUN docpad generate

# Configure Nginx -------------------------

RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.original
ADD nginx.conf          /etc/nginx/

# Configure logrotate ---------------------

ADD logrotate.nginx.conf    /etc/logrotate.d/nginx
ADD logrotate-loop.sh       /usr/bin/logrotate-loop

RUN chmod 644               /etc/logrotate.d/nginx && \
    chown root:root         /etc/logrotate.d/nginx

# RUN cat /etc/supervisord.logrotate.conf >> /etc/supervisord.conf && rm /etc/supervisord.logrotate.conf

# Configure Supervisord -------------------

ADD supervisord.conf            /etc/supervisord.conf
ADD supervisord.nginx.conf      /etc/supervisord.d/
ADD supervisord.nodejs.conf     /etc/supervisord.d/
ADD supervisord.logrotate.conf  /etc/supervisord.d/

CMD [ "/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf" ]

# --------------------------------------------------------------------
# EOF