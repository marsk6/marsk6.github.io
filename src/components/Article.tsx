import { useRemarkSync } from 'react-remark'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'
import {
  IconCalendar,
  IconClock,
  IconCopy,
  IconSquareRoundedCheck,
} from '@tabler/icons-react'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeFigure from 'rehype-figure'
import remarkWikiLinkPlugin from '@script/remark-wiki-url'
import dayjs from 'dayjs'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { cx } from '@emotion/css'
import { copyToClipboard } from '@/utils'

const PreElement: React.FC<PropsWithChildren<{}>> = ({ children, ...rest }) => {
  const [showCopyBtn, setShowCopyBtn] = useState(false)
  return (
    <pre
      {...rest}
      className="pre-copy"
      onMouseEnter={() => setShowCopyBtn(true)}
      onMouseLeave={() => setShowCopyBtn(false)}
    >
      <CopyButton
        visible={showCopyBtn}
        className={cx(
          showCopyBtn ? 'pre-copy-button--fade-in' : 'pre-copy-button--fade-out'
        )}
        text={children[0].props.children[0]}
      />
      {children}
    </pre>
  )
}

const CopyButton: React.FC<{
  text: string
  className?: string
  visible: boolean
}> = ({ text, className, visible }) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    copyToClipboard(text)
    setIsCopied(true)
  }
  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        setIsCopied(false)
      }, 500)
    }
  }, [visible])
  return (
    <div
      className={cx('pre-copy-button', className)}
      onClick={handleCopy}
      title={isCopied ? 'Copied' : 'Copy'}
    >
      {isCopied ? (
        <IconSquareRoundedCheck size={18} color="green" />
      ) : (
        <IconCopy size={18} />
      )}
    </div>
  )
}

const Article: React.FC<{ post: Post }> = ({ post }) => {
  const reactContent = useRemarkSync(post.content, {
    remarkPlugins: [
      remarkGfm,
      [
        remarkWikiLinkPlugin,
        { cdnUrl: 'https://cdn.jsdelivr.net/gh/marsk6/image-center@master' },
      ],
    ],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank' }],
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypeFigure, { className: 'blog-image-figure' }],
    ],
    rehypeReactOptions: {
      components: {
        pre: PreElement,
      },
    },
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
