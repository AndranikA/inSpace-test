import { setupWorker, rest } from 'msw';

// msw is used to mock both login and logout endpoints
const worker = setupWorker(
  rest.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, async (req, res, ctx) => {
    const { name, password } = await req.json();

    if (
      name.toLowerCase() === process.env.NEXT_PUBLIC_USER &&
      password.toLowerCase() === process.env.NEXT_PUBLIC_PASS
    ) {
      return res(
        // We could use JWT token but for simplicity let's use a simple dummy token instead
        ctx.cookie('token', process.env.NEXT_PUBLIC_AUTH_TOKEN as string),
        ctx.status(200),
        ctx.json({
          name,
        })
      );
    }

    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `User '${name}' not found`,
      })
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_API_URL}/logout`, async (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

worker.start();
