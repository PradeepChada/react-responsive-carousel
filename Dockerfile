FROM node:14.18.0-slim as base

WORKDIR /home/app/

RUN groupadd --gid 1001 app \
&& useradd --uid 1001 --gid app --shell /bin/bash --create-home app

COPY package.json yarn.lock /home/app/
RUN yarn global add @nrwl/cli
RUN yarn install
COPY . /home/app/
RUN yarn build

FROM node:14.18.0-slim

ARG PORT=3000
# Default to SNAPSHOT if version is not provided
ARG VERSION=SNAPSHOT
WORKDIR /home/app/

RUN groupadd --gid 1001 app \
&& useradd --uid 1001 --gid app --shell /bin/bash --create-home app

RUN echo "build.artifactId=mobius" > /home/app/build.properties
RUN echo "build.version=$VERSION" >> /home/app/build.properties
RUN echo "version=$VERSION" >> /home/app/build.properties
RUN echo "build.scmRevision.id=`echo $VERSION | cut -d "-" -f3`" >> /home/app/build.properties
RUN echo "build.timestamp=`date +%s000`" >> /home/app/build.properties

COPY --from=base /home/app/build/ .
COPY --from=base /home/app/package.json /home/app/package.json
COPY --from=base /home/app/node_modules ./node_modules
EXPOSE ${PORT}

USER app:app
EXPOSE 3000
CMD ["yarn", "start"]
