const { Midjourney } = require("midjourney");
const { account } = require("../utils");

const mjRequestMap = {};

const getImageServiceId = () => {
  let imageServiceId;
  do {
    const timestamp = date.getTime();
    // 生成随机数
    const randomNum = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");
    // 组合订单编号
    imageServiceId = `${timestamp}-${randomNum}`;
  } while (!mjRequestMap[imageServiceId]);

  return imageServiceId;
};

const imageService = {
  async generateImage(description) {
    const imageServiceId = getImageServiceId();
    mjRequestMap[imageServiceId] = {
      status: 0,
      id: imageServiceId,
      description,
    };
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

          mjRequestMap[imageServiceId].url = url;
        }
      )
      .then(function (msg) {
        console.log("msg123", msg);
        mjRequestMap[imageServiceId].url = msg.uri;
        mjRequestMap[imageServiceId].status = 1;
      });
    // 实现生成图片的业务逻辑
    // 返回生成的图片 URL 或数据
    return imageServiceId;
  },
  async pollingImage(imageServiceId) {
    return mjRequestMap[imageServiceId];
  },
};

module.exports = {
  imageService,
};
