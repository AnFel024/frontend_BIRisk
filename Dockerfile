FROM node:14.17.0-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install react-scripts
RUN npm install create-react-app
RUN npm install axios -g --save
RUN npm install react-bootstrap -g --save
RUN npm install font-awesome -g --save
RUN npm install bootstrap -g --save

COPY . /app

EXPOSE 3000

# start app
CMD ["npm", "start"]