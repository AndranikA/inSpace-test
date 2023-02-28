
## About
This is a sample web application to demonstrate how modern projects should be designed and implemented.
The project is deployed on Vercel using its GitHub integration for Next.js projects. Available under this [url](https://in-space-test.vercel.app/) Use `admin/balonka1` as username/password


## Getting Started

Simply run the development server and it's ready.

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

*Note*: As this is a test project Env vars are hardcoded and .env file is committed. The username/password can be set as env variables. 

## Tech Stack

Teck stack is designed to be maximum flexible and suitable for large-scale projects

- *Next.js*. We strongly believe that any new project should be initialized with Next.js. The current project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- [Jotai](https://jotai.org/) is used as s state management solution
- [React-query](https://react-query-v3.tanstack.com/) and [ky](https://www.npmjs.com/package/ky) are used for handling API requests
- [React hook form](https://react-hook-form.com/) is used for handling forms
- Design system is based on [Radix UI](https://www.radix-ui.com/) and [TailwindCSS](https://tailwindcss.com/) to be as scalable as possible to support design team requests easily without painful dev experience.
- [MSW](https://mswjs.io/) is used for mocking login/logout endpoints