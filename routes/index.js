const router = require("koa-router")();
const { imageController } = require("../controllers/index");

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

router.post("/generate", imageController.generateImage);


router.post("/polling", imageController.pollingImage);

module.exports = router;
