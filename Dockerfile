FROM node:14.17.0
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent --save
RUN npm install create-react-app --silent --save
RUN npm install react-scripts -g --silent --save
RUN npm install axios -g --silent --save
RUN npm install react-bootstrap -g --silent --save
RUN npm install font-awesome -g --silent --save
RUN npm install bootstrap -g --silent --save

# add app
COPY . ./

EXPOSE 8083

# start app
CMD ["npm", "start"]
