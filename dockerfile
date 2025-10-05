FROM node:18-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install
RUN npm install jose
RUN npm i sass
RUN npm install --dev @fab/nextjs
RUN npm install @mui/material @emotion/react @emotion/styled

# Copier le reste du projet
COPY . .

# Exposer le port 3000 (Next.js)
EXPOSE 3000

#configurer prisma
RUN npx prisma generate

# Démarrer le serveur de développement
RUN npm run dev

# docker build -t geckocooking . (construire image)
