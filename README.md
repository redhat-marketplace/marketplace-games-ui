# Marketplace Games

UI and Backend for the marketplace-games

## Get started

Install the dependencies...

##### Client
```bash
cd marketplace-games-ui/client
yarn install
```

##### Service
```
cd marketplace-games-ui/backend
go get
```

#### Starting development servers

For local development we utilize webpack dev server for the client and proxy all API requests to the backend service running on `localhost:8080`.

##### Client
```bash
cd marketplace-games-ui/client
yarn dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the marketplace games app
running. Edit a component file in `src`, save it, and reload the page to see your changes.

##### Service
```bash
cd marketplace-games-ui/backend
go run main.go
```

The backend go server will start on `localhost:8080`


## Building and running in production mode

#### Build the client

```bash
cd marketplace-games-ui/client
yarn build
```

#### Build the service

```bash
cd marketplace-games-ui/backend
go build -o ../service.go
cd ..
./service.go
```
