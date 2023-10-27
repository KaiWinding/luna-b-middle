const { imageService } = require("../services/index");

const imageController = {
  async generateImage(ctx) {
    const description = ctx.request.body.description;
    const jwtheader = ctx.request.headers["jwtheader"];

    console.log('jwtheader = ', jwtheader);
    console.log('ctx.request.headers = ', ctx.request.headers);
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
