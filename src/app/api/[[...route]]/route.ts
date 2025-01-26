import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import auth from "../../../features/auth/components/server/route";

const app = new Hono().basePath("/api")

app.route("/auth", auth);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof app;

// import { Hono } from 'hono';
// import { handle } from 'hono/vercel';
// import auth from "../../../features/auth/components/server/route";

// const app = new Hono().basePath("/api")

// const routes = app
//   .route("/auth", auth);

// export const GET = handle(app);

// export type AppType = typeof routes;
