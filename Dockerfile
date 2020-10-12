FROM node:12-buster as build

WORKDIR /build
COPY . .

RUN yarn install --frozen-lockfile --ignore-engines && \
    yarn build && \
    npm prune --production && \
    rm .npmrc

FROM scratch
WORKDIR /home/app


COPY --from=build /build/public /home/app/public
