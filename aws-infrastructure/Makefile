local_start-api: ../node_modules
	sam local start-api  --env-vars .env.json

deploy: ../node_modules
	sam deploy

../node_modules:
	cd .. && yarn
