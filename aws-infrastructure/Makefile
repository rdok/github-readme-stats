local_start-api: ../node_modules
	sam local start-api  --env-vars .env.json

deploy: ../node_modules
	sam deploy
	make invalidate-cache

../node_modules:
	cd .. && yarn --production

include .env
export
invalidate-cache:
	CLOUDFRONT_DISTRIBUTION_ID=$$(aws cloudformation describe-stacks \
		--stack-name $${STACK_NAME} \
		--query 'Stacks[0].Outputs[?OutputKey==`CDNCloudFrontId`].OutputValue' \
		--output text) && \
	echo "CLOUDFRONT_DISTRIBUTION_ID: $$CLOUDFRONT_DISTRIBUTION_ID" && \
	INVALIDATION_RESPONSE=$$(aws --output json cloudfront create-invalidation  \
		--distribution-id "$${CLOUDFRONT_DISTRIBUTION_ID}" \
		--paths '/*') && \
	INVALIDATION_ID=$$(echo "$${INVALIDATION_RESPONSE}" | jq -r .Invalidation.Id) && \
	MESSAGE=$$(echo "Waiting for cache invalidation completion") && \
	echo $$MESSAGE && \
	aws cloudfront wait invalidation-completed \
		--distribution-id "$${CLOUDFRONT_DISTRIBUTION_ID}" \
		--id "$${INVALIDATION_ID}" && \
	MESSAGE=$$(echo "Done") && echo $$MESSAGE
