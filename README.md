# hackathon-2021.slack-bot.base-example

This repository was created to be used during the [SheSharp Hackathon 2021](https://www.shesharp.co/2021-hackathon/) as a boilerplate for one of the challenges proposed.

In a sense it uses [github actions](https://github.com/features/actions) with a [node.js](https://nodejs.org/en/) script to trigger messages events on [Slack](https://slack.com/intl/en-nl/).

## Requirements 

To be able to develop an Slack bot using GitHub actions and node.js you will need:

1. A github account and repository
1. Node.js installed on your machine
1. A workspace and **your** bot app on Slack

# Where do I store my app keys/passwords? 🤔

When developing an app we **NEVER** expose keys or passwords on our application! That's because of security reasons... for example if you write down your database credentials on your code, **ANYONE** can have access to your database making it easy to change data and access personal information.

On our case, we are not working with databases - phewww 😉 

But we still have sensitive keys that we need on our app like our **BOT_TOKEN**, which is the token generated on slack when you create your bot app! 
We can't hard code it's value on the codebase, so we need to create a **.env** file! 

A **.env** file is where we place all our Enviroment Variables, like credentials, passwords, environment settings... You can read more about it [here](https://dev.to/aadilraza339/what-is-env-file-in-node-js-3h6c)

So now you know that you should store your app sensitive data into an .env file, but don't forget to add it into your **.gitignore** file so it won't be commited on your repository. If you push your .env filled with information to your repository it would be the same as not having a .env at all, am I right? 🤓

## But how github actions will have access to the environment variables without the .env file? 🤨

Well these version-controlled source code and file hosting platforms like GitHub, BitBucket, GitLab and etc, have an special place for that.

On our case (GitHub) on your repository you can find a navbar.

![Repository Navbar](./docs/images/repositoryNavbar.png?raw=true "Repository Navbar")

You should click on Settings. On this page you can find all the settings related with your repository, including branches, access, webhooks... everything!

![Settings Menu](./docs/images/settingsMenu.png?raw=true "Settings Menu")

If look close to the end of the side bar you should find the secrets button, on that page is where we store the secrets that we need on our application to run, on this case the **BOT_TOKEN**.

After navigating to the secrets on the menu item, you should be able to see different sections of secrets... On this application we will need to click on the new repository secret button on the top.

![Repository Secrets](./docs/images/repositorySecrets.png?raw=true "Repository Secrets")

There you should be able to add your secret 😉. Make sure to add the name as the **same** as you have written on your code!

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

# How can I trigger the messages without a Server to keep my code running?

We can create a work around it by using [GitHub Actions](https://github.com/features/actions)! 

As the goal of our Bot is to **send messages after an amount of time**, we don't need a script listening to actions but just **triggering the action**.
So based on that we can program GHA to run our script that sends the messages 🚀

# How do I create a GitHub Action workflow? And how do I schedule it to run by time?

Github Actions enables you to create custom software development lifecycle workflows directly in your Github repository. These workflows are made out of different tasks so-called actions that can be run automatically on certain events.

This enables you to include Continues Integration (CI) and continuous deployment (CD) capabilities and many other features directly in your repository.

To start your first **Workflow** you first need to create a directory on the root of your project called **".github"** . Then inside of this directory you create another one called **"workflows"**. These second folder will hold all the workflows of your application! 

Notice that this folders are not only a matter of **organizing** your repo, but is also the **"syntax"** of github actions. The folders needs to have this exact name and this hierarchy so github can read it 🤖.

Then, inside of your workflows folder, you can create your <insert_here_workflow_name>.yml file. The name of the workflow is up to you! The best practice is to name it as it represents or on when it is triggered. For example, on this repo I called it "every-one-hour.yml"... So then without even opening the file you already know that "something is done by this workflow every one hour".

Now inside the file we have **default key words** that are used to define our workflow for that I would recomend you to read (this article about Github actions)[https://medium.com/intelligentmachines/github-actions-basics-40a4d9b417f8] or/and (this other article about Github actions)[https://gabrieltanner.org/blog/an-introduction-to-github-actions] 📚 They are not very long, but it explains how the file works and its core key words 😉.

After this, you might understand the workflow implemented on this example 🎉

If you still wonder how our event trigger works on the workflow file I recomend you to check [this part of the docs](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#schedule) 😉 and for deeply understanding on the subject you can check the [GitHub documentation](https://docs.github.com/en/actions)

## Notes:

1. This approach will not work with "reaction actions" as if you want your Bot to react in interactions made to it. Thats because to do so your Bot script needs to be running all the time to be able to listen to this actions and this approach **we trigger the bot once in a while**, if you would like your bot to be more **interactive** you need to place it up and running in a server
1. As we are using GHA to run the script, make sure to finish the process at the end of the desired action otherwise your GHA will fail because of **timeout** or it will not **stop running**.
