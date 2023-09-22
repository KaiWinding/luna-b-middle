const { imageService } = require("../services/index");

const imageController = {
  async generateImage(ctx) {
    const description = ctx.request.body.description;
    console.log('hello world');
    console.log('description = ', description);
    const image = await imageService.generateImage(description);
    ctx.body = { image };
  },
};

module.exports = {
  imageController,
};
