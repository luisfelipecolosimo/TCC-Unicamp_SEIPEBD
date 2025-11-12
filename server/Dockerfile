FROM node:22-slim AS builder
USER root
WORKDIR /home/node/build
COPY package*.json ./
RUN npm i --omit-dev
COPY . .
RUN npm run build

FROM node:22-slim AS runner
RUN apt update && apt install -y libaio1
ENV TZ="Etc/GMT+3"
RUN export TZ=Etc/GMT+3

ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_23_7 \
    OCI_LIB_DIR=/opt/oracle/instantclient_23_7 \
    OCI_INC_DIR=/opt/oracle/instantclient_23_7/sdk/include 

WORKDIR /home/node/app

VOLUME /opt/oracle

USER node

COPY --from=builder /home/node/build .

CMD [ "npm", "run", "start:prod" ]