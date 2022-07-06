FROM ubuntu:20.04

USER root
ARG ID_USER=1000
ARG ID_GROUP=1000
RUN groupadd -g ${ID_GROUP} app &&\
    useradd -u ${ID_USER} -m app -g app &&\
    apt-get update &&\
    apt-get install curl nano -y

USER app
ARG NODE_VERSION=16.14.2
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash &&\
    export NVM_DIR="$HOME/.nvm" &&\
    . $NVM_DIR/nvm.sh &&\
    nvm install ${NODE_VERSION} &&\
    echo "\n\
				source ~/.nvm/nvm.sh\n\
    " >> ~/.bashrc

ARG NODE_VERSION=16.14.2
ENV PATH /home/app/.nvm/versions/node/v${NODE_VERSION}/bin:${PATH}
RUN npm install pm2 -g

USER root
RUN echo "\n\
				source /home/app/.nvm/nvm.sh\n\
    " >> ~/.bashrc

ARG ENVIRONMENT=production
CMD if [ "$ENVIRONMENT" = "production" ] ; then \
        pm2 start \
    ; else \
        tail -F anything \
    ; fi
