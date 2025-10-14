FROM node:18-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package*.json ./

# Installer toutes les dépendances
RUN npm install \
    && npm install jose \
    && npm install sass \
    && npm install --dev @fab/nextjs \
    && npm install next-auth \
    && npm install nookies \
    && npm install @mui/material @emotion/react @emotion/styled

# Copier le reste du projet
COPY . .

# Générer Prisma
RUN npx prisma generate

# Exposer le port 3000
EXPOSE 3000

# Démarrer le serveur 
CMD ["npm", "run", "dev"]


# docker build -t geckocooking . (construire image)
