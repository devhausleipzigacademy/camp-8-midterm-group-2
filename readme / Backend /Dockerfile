FROM node:latest
WORKDIR /root_folder
RUN mkdr /root_folder/src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]