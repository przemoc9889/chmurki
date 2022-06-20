# Obraz Node na bazie alpine, autor, katalog roboczy
# Obraz serwera Node na bazie dystrybucji alpine, 
# autor i katalog roboczy aplikacji
FROM node:alpine
LABEL MAINTAINER="Przemyslaw Mazur"
WORKDIR /usr/app

# Instalacja zaleznosci dla serera node, 
# kopia do systemu plikow kontenera
COPY ./package.json ./
RUN npm install 
COPY ./ ./

# komenda do wystartowania serwera node.js
CMD ["npm", "start"]