FROM node 

LABEL Creators="Caio && Luiz"
LABEL Version="1.0"

WORKDIR /home/node

COPY . /home/node

RUN yarn

CMD [ "yarn", "dev" ]