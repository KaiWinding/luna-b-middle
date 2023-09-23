const { imageService } = require("../services/index");

const imageController = {
  async generateImage(ctx) {
    const description = ctx.request.body.description;
    console.log("hello world");
    console.log("description = ", description);
    const res = await imageService.generateImage(description);
    ctx.body = {
        code: 1,
        data: {
            taskId: res
        }
    };
  },
  async pollingImage(ctx) {
    const id = ctx.request.body.taskId;
    console.log("hello world");
    console.log("description = ", id);
    const taskResult = await imageService.pollingImage(id);
    console.log('res = ', res);
    ctx.body = {
        code: 1,
        data: taskResult
    };
  },
};

module.exports = {
  imageController,
};
