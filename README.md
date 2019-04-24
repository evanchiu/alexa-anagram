# alexa-anagram
Alexa responds with the count and anagrams for a requested word

## Skill Usage
> "Alexa, ask anagrams for apple"

> "Apple has 17 subanagrams: a, ale, ape, apple, la, lap, lea, leap, pa, pal, pale, pap, pea, peal, pep, plea"

## Deploy with CloudFormation

Prerequisites: [Node.js](https://nodejs.org/en/) and [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed

* Create an [AWS](https://aws.amazon.com/) Account and [IAM User](https://aws.amazon.com/iam/) with the `AdministratorAccess` AWS [Managed Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html)
* Run `aws configure` to put store that user's credentials in `~/.aws/credentials`
* Create an S3 bucket for storing the Lambda code and store its name in a shell variable with:
  * `export CODE_BUCKET=<bucket name>`
* Npm install:
  * `npm install`
* Build:
  * `npm run build`
* Upload package to S3, transform the CloudFormation template:
  * `npm run package`
* Deploy to CloudFormation:
  * `npm run deploy`

## Deploy from the AWS Serverless Application Repository
* Hit "Deploy" from the [application](https://serverlessrepo.aws.amazon.com/#/applications/arn:aws:serverlessrepo:us-east-1:233054207705:applications~alexa-anagram) page

## Alexa Setup
* Open the [AWS Console](https://console.aws.amazon.com), and navigate to your lambda, copy the ARN
  * Should be something like *arn:aws:lambda:us-west-2:000000000000:function:dev-alexa-anagram-username-anagram-XXXXXXXXXXXXX*
* Open the [Amazon Developer Console](https://developer.amazon.com/home.html)
  * Navigate to Alexa / Alexa Skills Kit/ Add a new Skill
  * Fill in skill information
  * Copy [interaction-model.json](interaction-model.json) in for the interaction model
  * In Configuration, paste the copied ARN from Lambda
  * In test, enter utterance "for *apple*" and hit **Ask Anagram**

## Data
The dictionary is [6of12.txt](data/6of12.txt), with single-letter words other than "a" removed, along with all words containing non lowercase letters (e.g. proper nouns, hyphenations, contractions, etc.).  See original information about [12dicts](http://scrapmaker.com/data/wordlists/twelve-dicts/readme.html).

## Links
* [alexa-anagram](https://github.com/evanchiu/alexa-anagram) on Github
* [alexa-anagram](https://serverlessrepo.aws.amazon.com/#/applications/arn:aws:serverlessrepo:us-east-1:233054207705:applications~alexa-anagram) on the AWS Serverless Application Repository

## License
&copy; 2017-2019 [Evan Chiu](https://evanchiu.com). This project is available under the terms of the MIT license.
