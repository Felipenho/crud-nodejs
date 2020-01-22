FROM node 

LABEL Creators="Caio && Luiz"
LABEL Version="1.0"

WORKDIR /home/node

COPY . /home/node

RUN yarn

EXPOSE 81/tcp 4100/tcp

CMD [ "yarn", "dev" ]