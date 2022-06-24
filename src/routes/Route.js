import { execQuery, verifyReq } from "../utils/tools";

const postSomething = async (req, res) => {
  verifyReq(req, res, async () => {
    const { body } = req;
    //const data = await execQuery(`call DBonStoreProcedure(${value})`);
    res.send(`You sent: ${JSON.stringify(body)}`);
  });
};

export { postSomething };
