FROM node:latest
RUN mkdr /root_folder/src
WORKDIR /root_folder
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]