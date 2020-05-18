import { Router, Application, send } from 'https://deno.land/x/oak/mod.ts'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import usePage from './util/usePage.js'

const router = new Router()

router.get('/', usePage(Home))

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())
app.use(async (ctx, next) => {
  try {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/public`,
    })
  } catch (err) {
    next(ctx)
  }
})
app.use(usePage(NotFound))

await app.listen({ port: 8000 })