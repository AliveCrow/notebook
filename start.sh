#!/bin/bash

  npm i pnpm -g
  pnpm i
  nohup   pnpm start > /dev/null &
  curl "http://localhost:3000/post"
