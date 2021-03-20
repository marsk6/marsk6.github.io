import cheerio from 'cheerio';
import path from 'path';
import jdown from 'jdown';
import dayjs from 'dayjs';
import fse from 'fs-extra';

export function html2toc(str) {
  const $ = cheerio.load(str);
  const headings = [];
  $('h1,h2,h3,h4,h5').each((index, h) => {
    headings.push({
      title: $(h).html(),
      depth: h.tagName.replace(/\D/g, ''),
      id: $(h).attr('id'),
    });
  });
  const toclist = headings.map((head) => {
    return `<li class="toc-${head.depth}" data-id="#${head.id}">${head.title}</li>`;
  });
  const list = toclist.join('');
  if (list) {
    return `<ul class="toc">${list}</ul>`;
  }
  return '';
}

export function makePageRoutes({
  items,
  pageSize,
  pageToken = 'page',
  route,
  decorate,
}) {
  const itemsCopy = [...items];
  const pages = [];

  while (itemsCopy.length) {
    pages.push(itemsCopy.splice(0, pageSize));
  }

  const totalPages = pages.length;

  const firstPage = pages[0];

  const routes = [
    // {
    //   path: path.resolve('/', route.path, pageToken),
    //   redirect: route.path,
    //   noThrow: true
    // },
    {
      ...route,
      ...decorate(firstPage, 1, totalPages),
      children: pages.map((page, i) => ({
        ...route,
        path: path.resolve('/', route.path, pageToken, `${i + 1}`),
        ...decorate(page, i + 1, totalPages),
      })),
    },
  ];

  return routes;
}

export async function getAllPosts() {
  const content = await jdown('content');
  const category = {};
  const archive = {};
  const tag = {};
  const dateFormat = 'YYYY-MM-DD';

  const latest = content.posts.map((post, index) => {
    post.toc = html2toc(post.contents);
    const date = dayjs(post.date);
    post.archive = date.year();
    post.date = date.format(dateFormat);
    if (!category[post.category]) {
      category[post.category] = [];
    }
    if (!archive[post.archive]) {
      archive[post.archive] = [];
    }
    if (!tag[post.tag]) {
      tag[post.tag] = [];
    }
    category[post.category].push(post);
    archive[post.archive].push(post);
    tag[post.tag].push(post);
    return post;
  });
  setPrevNextPost('category', category);
  setPrevNextPost('archive', archive);
  setPrevNextPost('tag', tag);
  setPrevNextPost('latest', latest);
  return { category, archive, tag, latest };
}

function setPrevNextPost(catelog, posts) {
  let nextPosts = posts;
  if (!Array.isArray(posts)) {
    nextPosts = [];
    Object.keys(posts).forEach((key) => {
      nextPosts = [...nextPosts, ...posts[key]];
    });
  }

  nextPosts.forEach((post, index) => {
    const prev = posts[index - 1];
    const next = posts[index + 1];
    post.prev = {};
    post.next = {};
    if (prev) {
      post.prev[catelog] = {
        id: prev.id,
        title: prev.title,
      };
    }
    if (next) {
      post.next[catelog] = {
        id: next.id,
        title: next.title,
      };
    }
  });
}
