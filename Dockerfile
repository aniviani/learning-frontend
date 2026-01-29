FROM node:20-alpine

WORKDIR /app

# Сначала зависимости (лучше кешируется)
COPY package.json package-lock.json ./
RUN npm ci

# Потом исходники
COPY . .

EXPOSE 5173

# Важно: Vite должен слушать 0.0.0.0, иначе с хоста не откроется
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
