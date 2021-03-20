const axios = require('axios');
const url = 'https://api.seller.shopee.io/mock/706/api/gen/md';

async function getMd() {
  const { data } = await axios.get(url);
  data.for
  const nextContent = `---
  id: ${info.id}
  title: ${info.title}
  category: ${info.category}
  date: ${info.date}
  desc:
  tag: web
  ---
  ${content}
  `;
}
