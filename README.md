# backend Express js (in-class course project)
(last updated: 2026-03-28)

## execution demo file:
[markdown version here](./docs/LAB_2_%20Execution.md)
[PDF vershion here](./docs/LAB_2_%20Execution.pdf)

## usage: 
- create `.env` from `.env.example` for dev config
```bash
cp .env.example .env
```
- build & run docker compose (detached)
```bash
docker compose up --build -d
```
- you can monitor logs
```bash
# all containers
docker compose logs -f
```
```bash
# api only
docker compose logs -f api
```
```bash
# mongo only
docker compose logs -f mongo
```
- app will be served on `http://localhost:3000/`