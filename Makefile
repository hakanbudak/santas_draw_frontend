.PHONY: help build up down logs restart clean dev install

help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build Docker image"
	@echo "  make up         - Start containers"
	@echo "  make down       - Stop containers"
	@echo "  make logs       - View container logs"
	@echo "  make restart    - Restart containers"
	@echo "  make clean      - Remove containers"

install:
	npm install

dev:
	npm run dev

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

restart:
	docker-compose restart

clean:
	docker-compose down -v

