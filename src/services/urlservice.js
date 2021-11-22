const { URL } = require("../models/URLs");
const { convertBase64ToInt, convertIntToBase64 } = require("../services/base64Convertor");

async function createRandomShortCode(link) {
  const genCode = parseInt(Math.random() * 999999999999);

  const exists = await URL.findOne({
    where: {
      id: genCode,
    },
  });
  if (exists) {
    // FIX: possible race condition if multiple servers vs 1 db
    return await createRandomShortCode(link);
  }
  return await URL.create({
    id: genCode,
    code: convertIntToBase64(genCode),
    link: link,
  });
}

async function createCustomShortCode(code, link) {
  // TODO: validate code
  const id = convertBase64ToInt(code);
  const exists = await URL.findOne({
    where: {
      id: id,
    },
  });
  if (exists) {
    throw new Error("This shortcode [" + code + "] already exists");
  }
  return await URL.create({
    id: id,
    code: code,
    link: link,
  });
}

async function findLongUrl(code) {
  const id = convertBase64ToInt(code);
  console.log(code);
  console.log(convertIntToBase64(930979004149))
  console.log(convertBase64ToInt('ds2G3WQ'))
  return await URL.findOne({
    where: {
      id: id,
    },
  });
}

module.exports = {
  createCustomShortCode,
  createRandomShortCode,
  findLongUrl,
};