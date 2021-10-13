# hackathon-2021.slack-bot.base-example

This repository was created to be used during the [SheSharp Hackathon 2021](https://www.shesharp.co/2021-hackathon/) as a boilerplate for one of the challenges proposed.

In a sense it uses [github actions](https://github.com/features/actions) with a [node.js](https://nodejs.org/en/) script to trigger messages events on [Slack](https://slack.com/intl/en-nl/).

## Requirements 

To be able to develop an Slack bot using GitHub actions and node.js you will need:

1. A github account and repository
1. Node.js installed on your machine
1. A workspace and **your** bot app on Slack 

# How do I create a developer account on Slack?

First things first, you need a **Slack Workspace** so you can develop and test you **Slack App**. So go to slack, sign in and click on create a workspace, if you already have your own or a workspace that you can test it out, you can skip that and go straight to create your app.

![Create workspace at slack](./docs/images/createWorkspace.png?raw=true "Create workspace at slack")

After you created your workspace, we need to create your app! Go to [https://api.slack.com/](https://api.slack.com/) and click on "create an app" button and after the screen redirects click on "create new app" button. It will show two options "from scratch" and "from manifest"... We are going to create our App from **Scratch** 😉

After selecting the option you should see a modal like this:

![Create an app from scratch](./docs/images/appConfiguration-1.png?raw=true "Create an app from scratch")

Fill up the app name of your preference, and select the workspace that you created for test. After that you can hit the "create app" button!

Now we should be on the features screen, where we can select what our app should be able to do... As our App will be a bot, you should select the **Bot feature**

![Features screen](./docs/images/featureScreen.png?raw=true "Features screen")

After clicking on the feature, the first thing that you need to define is **the scope of you bot token**, without this it's not possible to do actions with your bot... you need to give him permisions.

![Token scope](./docs/images/scopeToken.png?raw=true "Token scope")

So click on the "Review scopes to add" and scroll all the way down until you find an area called **Scopes**.

On the **Bot Token Scopes** to start, the **chat:write** and **im:write** permissions are probably enough. 

By that you start direct messages with people on your workspace and send messages.

After that you can scroll back up to **OAuth & Permissions** and click on **Install to workspace**.

This action will generate a token that you need to be able to trigger actions on your code 🚀

Now you have officially installed your app on your workspace, and it's ready to use!

# How to create a Slackbot script?

We have different ways to creating a slackbot! Literally tones of libraries around the internet that might help you out on this 😉

On this example we are using "SlackBots" library, which is a easy and quick way to have your Bot up and running with a few lines of code (Please check index.js).

