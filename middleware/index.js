function authenticationMiddleware() {
  return async (ctx, next) => {
    const token = ctx.header.jwtheader;

    if (!token) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: `No token Provided`,
      };
      return;
    }

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

      if (resData.code != 1) {
        throw new Error(resData.message);
      }

      await next();
    } catch (error) {
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
