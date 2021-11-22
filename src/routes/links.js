const { Router } = require("express");
const { convertIntToBase64, convertBase64ToInt } = require("../services/base64Convertor");
const {
  createCustomShortCode,
  createRandomShortCode,
  findLongUrl,
} = require("../services/urlservice");

const route = Router();

/**
 * POST /api/links
 * BODY
 *      link: http://xxxx.xxxx/xxxx/xxxx
 *      --- optional ---
 *      code: xxxxx
 */
route.post("/", async (req, res) => {
  const link = req.body.link;
  const code = req.body.code;
  // TODO: validate link must exist
    console.log('here')
  if (!code) {
    const url = await createRandomShortCode(link);
    return res.json(url);
  }

  try {
    const url = await createCustomShortCode(code, link);
    return res.json(url);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

/**
 * GET /api/links/xxxxx
 * RESPONSE
 *      link:
 */
route.get("/:code", async (req, res) => {
  const code = req.params.code;
  // TODO: validate code is available



  const url = await findLongUrl(code);

  if (url) {
    return res.json(url);
  } else {
    return res.status(404).json({ error: "No such shortcode created" });
  }
});

module.exports = route;