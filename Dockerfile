FROM node:14.17.0
# set working directory
RUN mkdir /code
WORKDIR /code

# add `/app/node_modules/.bin` to $PATH
ENV PATH /code/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./code
COPY package-lock.json ./code
RUN npm install --silent --save
RUN npm install create-react-app --silent --save
RUN npm install react-scripts -g --silent --save
RUN npm install axios -g --silent --save
RUN npm install react-bootstrap -g --silent --save
RUN npm install font-awesome -g --silent --save
RUN npm install bootstrap -g --silent --save

# add app
COPY . ./code

EXPOSE 3000

# start app
CMD ["npm", "start"]
