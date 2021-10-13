FROM node:14.18.0-slim as base

WORKDIR /usr/src/app/

RUN groupadd --gid 1001 app \
&& useradd --uid 1001 --gid app --shell /bin/bash --create-home app

COPY package.json yarn.lock ./
RUN yarn global add @nrwl/cli
RUN yarn install
COPY . .
RUN yarn build

FROM node:14.18.0-slim

# Default to SNAPSHOT if version is not provided
ARG VERSION=SNAPSHOT
WORKDIR /usr/src/app/

RUN groupadd --gid 1001 app \
&& useradd --uid 1001 --gid app --shell /bin/bash --create-home app

RUN echo "build.artifactId=mobius" > /usr/src/app/build.properties
RUN echo "build.version=$VERSION" >> /usr/src/app/build.properties
RUN echo "version=$VERSION" >> /usr/src/app/build.properties
RUN echo "build.scmRevision.id=`echo $VERSION | cut -d "-" -f3`" >> /usr/src/app/build.properties
RUN echo "build.timestamp=`date +%s000`" >> /usr/src/app/build.properties

COPY --from=base /usr/src/app/build ./build
COPY --from=base /usr/src/app/package.json /usr/src/app/package.json
COPY --from=base /usr/src/app/node_modules ./node_modules

USER app:app
CMD ["yarn", "serve"]
