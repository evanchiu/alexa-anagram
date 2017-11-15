# alexa-anagram
Alexa responds with the count and anagrams for a requested word

## Skill Usage
> "Alexa, ask anagrams for apple"

> "Apple has 17 subanagrams: a, ale, ape, apple, la, lap, lea, leap, pa, pal, pale, pap, pea, peal, pep, plea"

## Setup
* Create an [AWS](https://aws.amazon.com/) Account and [IAM User](https://aws.amazon.com/iam/) with the `AdministratorAccess` AWS [Managed Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html)
* Run `aws configure` to put store that user's credentials in `~/.aws/credentials`
* Create an S3 bucket for storing the Lambda code and store its name in a shell variable with:
  * `export S3_BUCKET=<bucket name>`
* Npm install:
  * `npm install`
* Build:
  * `npm run build`
* Upload package to S3, transform the CloudFormation template:
  * `npm run package`
* Deploy to CloudFormation:
  * `npm run deploy`
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

&copy; 2017 Evan Chiu. This project is licensed under the terms of the MIT license.
