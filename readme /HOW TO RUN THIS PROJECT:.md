HOW TO RUN THIS PROJECT:

Frontend:
1. npm run dev

Backend: 

1. Docker (requires to start the docker Application)
docker compose up -d

2. To run server.ts
npm run server

3. To run prisma browser-interface (optional):
npx prisma studio


TO RESET docker server via Terminal:

```
docker compose down
docker volume prune
docker compose up -d
npx prisma db push
npm run server
```
