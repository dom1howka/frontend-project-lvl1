#!/usr/bin/env node
install: 
    npm ci
	npx simple-git-hooks

brain-games:
	node bin/brain-games.js

run:
	

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test
