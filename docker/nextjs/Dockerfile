FROM node:alpine

#ENV DIR 'landing'
ENV TEST_ENV=something
RUN echo $TEST_ENV

# Set working directory
WORKDIR /var/www/html/client

# Install PM2 globally
RUN npm install --global pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./landing/package*.json ./
COPY ./landing/yarn.lock ./

# Install dependencies
#RUN npm install --production
RUN yarn --production


# Copy all files
COPY ./landing/ ./

# Build app
RUN yarn run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
