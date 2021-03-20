const fse = require('fs-extra');
const dayjs = require('dayjs');
const path = require('path');
const translate = require('translate');

async function run(root, category) {
  const stat = await fse.stat(root);
  if (stat.isFile()) {
    const info = {
      title: path.basename(root, '.md'),
      date: dayjs(stat.ctimeMs).format('YYYY/MM/DD'),
      category,
    };
    info.id = await translate(info.title, { from: 'Chinese', to: 'en' }).then(d => d.replace(/\s/g, '-'));
    const content = await fse.readFile(root);
    const nextContent =
`---
id: ${info.id}
title: ${info.title}
category: ${info.category}
date: ${info.date}
desc:
tag: web
---
${content}
`
    try {
      await fse.writeFile(root, nextContent);
    } finally {
    }
  } else {
    const dir = await fse.readdir(root);
    dir.forEach((d) => {
      if (d.indexOf('.') === 0 || d.indexOf('.md') === 0) return;
      if (category) {
        run(path.resolve(root, './', d), category);
      } else {
        if (d.indexOf('.') > 0) {
          run(path.resolve(root, './', d), 'default');
        } else {
          run(path.resolve(root, './', d), d);
        }
      }
    });
  }
}

run('/Users/kuncheng/Desktop/a/marsk-react-static-blog/content/collections/posts');
