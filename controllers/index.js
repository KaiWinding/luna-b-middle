const { imageService } = require("../services/index");

const imageController = {
  async generateImage(ctx) {
    const description = ctx.request.body.description;
    const Jwtheader = ctx.request.headers["Jwtheader"];
    if (!Jwtheader) {
      ctx.status = 4002;
      ctx.body = {
        code: -1,
      };
      return;
    }
    console.log("hello world");
    console.log("description = ", description);
    const res = await imageService.generateImage(description);
    ctx.body = {
      code: 1,
      data: {
        taskId: res,
      },
    };
  },
  async pollingImage(ctx) {
    const id = ctx.request.body.taskId;
    console.log("hello world");
    console.log("description = ", id);
    const taskResult = await imageService.pollingImage(id);
    ctx.body = {
      code: 1,
      data: taskResult,
    };
  },
};

module.exports = {
  imageController,
};
