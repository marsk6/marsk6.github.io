import { useRemarkSync } from 'react-remark'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'
import { IconCalendar, IconClock } from '@tabler/icons-react'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeFigure from 'rehype-figure'
import dayjs from 'dayjs'

const Article: React.FC<{ post: Post }> = ({ post }) => {
  const reactContent = useRemarkSync(post.content, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank' }],
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypeFigure, , { className: 'blog-image-figure' }],
    ],
  })
  return (
    <article className="p-2">
      <header className="mb-4">
        <p className="text-center font-medium text-4xl">{post.title}</p>
        <div className="mt-2 flex justify-center text-xs items-center gap-4">
          <div className="flex gap-0.5 items-center">
            <IconCalendar size={12} />
            <span>{`发布于 ${dayjs(post.ctime).format('YYYY-MM-DD')}`}</span>
          </div>
          <div className="flex gap-0.5 items-center">
            <IconClock size={12} />
            <span>约 {post.readingTime} 分钟</span>
          </div>
        </div>
      </header>
      <section className="markdown-body max-w-none dark:bg-[#19191c]">
        {reactContent}
      </section>
    </article>
  )
}

export default Article
