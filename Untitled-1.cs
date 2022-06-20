docker build -t zadanie1:zadanie1 .
docker run --name zadanie1 -d -p 8000:8000 zadanie1:zadanie1
docker logs zadanie1
docker history zadanie1:zadanie1 
