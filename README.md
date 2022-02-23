 # Simple microservices project to demonstrate the flow of event-based architecture behind the scenes.

 ## Stack and dependencies:
  - Docker
  - Kubernetes | Skaffold
  - React.js
  - Node.js
  - Express
  - Cors
  - Axios


 
This project was build with Docker and Kubernetes. So, first you need to install [kuberbetes] (https://kubernetes.io/docs/tasks/tools/), [Doker] (https://docs.docker.com/engine/install/) and [skaffold] (https://skaffold.dev/docs/install/) to start the services.


After install dependencies, in the root directory run the following command: ```skaffold dev``` to run all applications.

## Application flow:
  
  <img src="./assets/Event-driven%20architecture.svg"/>