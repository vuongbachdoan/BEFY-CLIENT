# Define node version
FROM node:16 as node

# Specify the directory where inside the image in which all commands run
WORKDIR /app

# Copy package files and installl dependencies
COPY . .

RUN npm install

# Command to run the starting the container
CMD [ "npm", "run", "build", "--prod" ]


# Stage 2

FROM nginx:alpine

COPY --from=node /app/dist/MS-BEFY /usr/share/nginx/html
