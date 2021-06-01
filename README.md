# Marketplace Games 🕹️

UI and Backend for the Marketplace Games app

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
go build -o ../service . 
cd ..
./service
```

Then open `localhost:8080` in your browser.

## Build and run the Marketplace Games via Docker

From root run the following cmd:
```bash
docker build -t marketplace-games .
```
then after the image has been successfully built run:
```bash
docker container -d -p 8080:8080 marketplace-games:latest
```  
Once the container is up and running open `localhost:8080` in your browser.
