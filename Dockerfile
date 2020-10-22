ARG GO_VERSION=1.15
ARG UBI_MINIMAL_VERSION=8.2

FROM node:12-alpine as client-build

# Setup working directory
WORKDIR /build
# Copy files
COPY . .
# Install dependencies and build final bundle
RUN cd ./client && yarn install && yarn build


FROM golang:${GO_VERSION} as service-build

# Setup working directory
WORKDIR /usr/local/go/src/github.com/redhat-marketplace/redhat-marketplace/marketplace-games-ui

# Copy and download dependencies
COPY ./backend/go.mod .
COPY ./backend/go.sum .
RUN go mod download

# Move over source code
COPY ./backend .
# Build app
RUN go build -o service .

FROM registry.access.redhat.com/ubi8/ubi-minimal:${UBI_MINIMAL_VERSION}
# Setup working directory
WORKDIR /home/app

ENV HOST=0.0.0.0
ENV PORT=8080
ENV GIN_MODE=release

EXPOSE 8080

# Copy over client build
COPY --from=client-build /build/dist /home/app/dist
# Copy over final service binary
COPY --from=service-build /usr/local/go/src/github.com/redhat-marketplace/redhat-marketplace/marketplace-games-ui/service /home/app/service

ENTRYPOINT /home/app/service
