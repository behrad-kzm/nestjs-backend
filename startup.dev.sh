/opt/wait-for-it.sh localhost:3306 -- npm run migration:run && npm run seed:run
npm run start:prod
