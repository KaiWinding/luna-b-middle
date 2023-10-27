function authenticationMiddleware() {
  return async (ctx, next) => {
    const token = ctx.request.headers["jwtheader"];

    if (!token) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: `No token Provided`,
      };
      return;
    }

    console.log('token = ', token);

    try {
      const response = await fetch(
        "https://prod.luna.aws.iartai.com/api/app/currentTokenInfo",
        {
          method: "GET",
          headers: {
            JWTHEADER: `${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Authentication failed");
      }

      const resData = await response.json();

      console.log('resData = ', resData);

      if (resData.code != 1) {
        console.log('code 1= 1 !!!');
        throw new Error(resData.message);
      }

      await next();
    } catch (error) {
        console.log('err = ', error);
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: "Failed to authenticate token",
      };
    }
  };
}

module.exports = {
  authenticationMiddleware,
};
