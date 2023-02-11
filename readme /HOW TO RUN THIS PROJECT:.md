HOW TO RUN THIS PROJECT:

Frontend:
1. npm run dev

2. Docker (requires to start the docker Application)
docker compose up -d

3. To run server.ts
npm run server

4. To run prisma browser-interface (optional):
npx prisma studio


TO RESET docker server via Terminal:

```
docker compose down
docker volume prune
docker compose up -d
npx prisma db push
npm run server
```