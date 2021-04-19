develop:
	npx webpack serve
	
install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

build:
	# rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test