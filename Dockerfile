FROM node

# Copy code

ADD . /

# Install nginx & node
# Install Bower
# Install node & bower depends
# Set bower root allow

EXPOSE 8080

ENTRYPOINT ["node", "index.js"]
