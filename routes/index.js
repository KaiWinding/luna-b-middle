const router = require("koa-router")();
const { imageController } = require("../controllers/index");
const { authenticationMiddleware } = require('../middleware/index');

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/api/heartbreath", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello luna!",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

router.post("/polling", imageController.pollingImage);

router.use(authenticationMiddleware());

router.post("/generate", imageController.generateImage);

module.exports = router;
