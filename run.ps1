docker stop zadanie1
docker rm zadanie1
docker image rm zadanie1:zadanie1
docker build -t zadanie1:zadanie1 .
docker run --name zadanie1 -d -p 8080:8080 zadanie1:zadanie1