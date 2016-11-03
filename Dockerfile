FROM node

# Copy code

ADD . /

RUN npm install --save express
# Install nginx & node
# Install Bower
# Install node & bower depends
# Set bower root allow

EXPOSE 8080

ENTRYPOINT ["node", "index.js"]
