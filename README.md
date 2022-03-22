# Natural Hair API
## Context
This project started as a way to practice creating a server with express with multiple routes. However, once I had completed the first iteration of this, I decided to deploy this to AWS using AWS CDK and Lambda. 

I choose to use AWS CDK to get my first taste of infrastructure as code (IaC). Through AWS CDK, I defined the configuration of my Lambda function which was then used to deploy my REST API. 

I thought that my simple application would be an interesting way to become acquainted with this as well as AWS's microservices. 

- 1st iteration: Express server with CRUD routes running on the computer [DONE]
- 2nd iteration: Express server deployed on AWS using Lambda and AWS CDK [DONE]
- 3rd iteration: migrate data from data.js to PostgreSQL (AWS RDS) [IN PROGRESS] 

## How to get me up at running:
All responses are returned in plain text format
AWS url: https://tss5wkf2x0.execute-api.eu-west-1.amazonaws.com/prod/
### Endpoints
<code> GET https://tss5wkf2x0.execute-api.eu-west-1.amazonaws.com/prod/hairstyles </code>
- Returns an list of all hairstyles
<code> GET https://tss5wkf2x0.execute-api.eu-west-1.amazonaws.com/prod/hairstyles/{id}</code>
- Returns hairstyle with the id defined in the params (i.e. hairstyles/1)

### Data Schema 
| Key         | Type        | Description                         |
| ----------- | ----------- | ----------------------------------  |
| id          | int         | The id of the hair style.           |
| hairstyle   | string      | The title of the hairstyle.         |
| image       | string      | The URL of the image.               |
| difficulty  | string      | Describes the diffculty of style    |
| url         | string      | A tutorial URL that redirects users to YouTube.        |
