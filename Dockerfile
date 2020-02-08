FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs
ADD . /weather-api 
WORKDIR /weather-api
RUN npm install 
EXPOSE 7171:7171


CMD ["npm", "start"]
