FROM node:18-alpine

LABEL Author="Ben Motevalli (b.motevalli@gmail.com)"

# set working directory
WORKDIR /app

RUN npm install -g serve # A simple webserver

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# add app
COPY . ./

RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "-n", "build", "-l", "3000"]

# # start app
# CMD ["npm", "run", "start"]