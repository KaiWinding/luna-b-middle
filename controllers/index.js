const { imageService } = require("../services/index");

const imageController = {
  async generateImage(ctx) {
    const description = ctx.request.body.description;
    console.log("hello world");
    console.log("description = ", description);
    const res = await imageService.generateImage(description);
    ctx.body = { id: res };
  },
  async pollingImage(ctx) {
    const id = ctx.request.body.id;
    console.log("hello world");
    console.log("description = ", description);
    const res = await imageService.pollingImage(id);
    console.log('res = ', res);
    ctx.body = res;
  },
};

module.exports = {
  imageController,
};
