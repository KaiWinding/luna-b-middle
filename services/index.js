const { Midjourney } = require("midjourney");
const { account } = require("../utils");

const imageService = {
  async generateImage(description) {
    const client = new Midjourney({
      ServerId: account.SERVER_ID,
      ChannelId: account.CHANNEL_ID,
      SalaiToken: account.Discord_TOKEN,
      Debug: true,
      Ws: true,
    });
    console.log("connect begin");
    await client.Connect();
    console.log("connect end");

    client
      .Imagine(
        "asian princess in wes anderson style, dressed in local uniform in Azure Lagoon, epic shot , --ar 16:9 --no glasses --stylize 400 --q .5 --v 5.2",
        (uri) => {
          console.log("loading123---", uri);
        }
      )
      .then(function (msg) {
        console.log("msg123", msg);
      });
    // 实现生成图片的业务逻辑
    // 返回生成的图片 URL 或数据
    return "image_url_or_data";
  },
};

module.exports = {
  imageService,
};