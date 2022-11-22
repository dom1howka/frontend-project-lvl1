#!/usr/bin/env node
install: install-deps
	npx simple-git-hooks

run:
	node bin/brain-games.js

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
