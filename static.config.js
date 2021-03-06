import path from 'path';
import { createSharedData } from 'react-static/node';
import { makePageRoutes, getAllPosts } from './scripts';

export default {
  getSiteData: async ({ dev }) => ({
    title: "marsk'blog",
  }),
  sideRoot: 'https://marsk6.github.io/',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    // FIXME: 无法 redirect，用 Redirect
    const { latest, category, archive, tag } = await getAllPosts();
    const FIRST_PAGE = 1;
    const routes = [
      ...makePageRoutes({
        items: latest,
        pageSize: 5,
        pageToken: 'page', // use page for the prefix, eg. blog/page/3
        route: {
          // Use this route as the base route
          path: '/',
          template: 'src/pages',
        },
        decorate: (posts, i, totalPages) => {
          if (i === FIRST_PAGE) {
            return {
              getData: () => ({
                latest: posts,
                category,
                archive,
                tag,
                currentPage: i,
                totalPages,
              }),
            };
          }
          return {
            getData: () => ({
              latest: posts,
              currentPage: i,
              totalPages,
            }),
          };
        },
      }),
      {
        path: '/post',
        children: latest.map((post) => {
          return {
            path: `/${post.title}`,
            template: 'src/layout/Post',
            getData: () => ({
              post,
            }),
          };
        }),
      },
      {
        path: '/category',
        template: 'src/layout/SectionList',
        getData: () => ({
          catalog: category,
          catalogName: 'category',
          count: Object.values(category).reduce(
            (pre, cur) => pre + cur.length,
            0
          ),
        }),
      },
      {
        path: '/archive',
        template: 'src/layout/SectionList',
        getData: () => ({
          catalog: archive,
          catalogName: 'archive',
          count: Object.values(archive).reduce(
            (pre, cur) => pre + cur.length,
            0
          ),
        }),
      },
      {
        path: '/tag',
        template: 'src/layout/SectionList',
        getData: () => ({
          catalog: tag,
          catalogName: 'tag',
          count: Object.values(tag).reduce((pre, cur) => pre + cur.length, 0),
        }),
      },
    ];
    return routes;
  },
  plugins: [
    ['react-static-plugin-typescript', { typeCheck: false }],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
};
