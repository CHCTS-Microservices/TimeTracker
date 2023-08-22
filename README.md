This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setting Up Dev Env
For those who want to set up a dev environment and not run the code locally, chose the following options. For both options, ensure you have [Docker Desktop](https://www.docker.com/) installed.
#Option 1

#Option 2
In this setup, we will use the Beta Dev Environment feature of Docker.
First, open the Docker application and click `Dev Env [Beta]`.

Then it will ask you to create a name for this environment and ask for the git repository address.
It will then ask you which code editor you want to use:
>[VS Code] 

You will need open VS Code and navigate to `extensions`.
You must download `Remote Containers`/`Remote Development` (make sure you also download everything inside this extension pack).
Press continue. Docker will then start to set up a dev environment in a container. Then it will ask you if you would like to open this environment in VS Code.

Before starting up the project, you will need to port forward. To do so, open up the terminal in VS Code and navigate to the Port section. Here add a port. `3000` (This is the default port react will launch the application to. If not, check the terminal log when you run the project to see which port its being sent to or check the `next. config` file)
Follow the * *Before Starting Up* section

>[Other]

Follow instructions in docker or google it.



## Getting Started
Make sure you have [NodeJs](https://nodejs.org/en) installed.
In terminal:
```bash
node -v
npm -v
```
To check if you have Node and Npm installed.

#Before Starting UP
When starting up the project, do the following:
```bash
npm i
or
npm install --all
```
This will create a folder `node_modules` and download/update all the libraries currently used by the application. Due to the size of the folder, it is not added into git.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# TimeTracker
