## GitHub Readme Stats - AWS for Longer Serverless Function Execution Timeout

Serve [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) through AWS instead of Vercel. Resolves issues with long requests timeouts. Vercel supports Serverless Function Execution Timeout of up to 30 seconds only for [enterprise pricing](https://vercel.com/pricing). Occasional Wakatime API requests, however, can take 15-30 seconds. [AWS Showcase](https://d3qbzv40zlk2ob.cloudfront.net/wakatime?username=rdok&theme=gruvbox&custom_title=Last%207%20Days&langs_count=15)

#### AWS Infrastructure
- Lambda with 128MB of memory
- API Gateway with maximum timeout of 30 seconds and cheaper HttpApi
- CloudFront with caching based on HTTP query only
