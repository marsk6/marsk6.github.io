import { getAllTags } from '@/api/local'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type TagsProps = {
  tags: Array<{
    name: string
    posts: Array<{
      title: string
      slug: string
    }>
  }>
}

const TagContainer: React.FC<{ tag: TagsProps['tags'][0] }> = ({ tag }) => {
  return (
    <section>
      <p id={tag.name} className="text-3xl md:text-2xl mb-4">
        # {tag.name}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tag.posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            legacyBehavior
            passHref
          >
            <div className="text-xs rounded-full px-2 py-1 border-gray-300 border text-center cursor-pointer">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  useEffect(() => {
    const { hash } = location
    if (hash) {
      document
        .querySelector<HTMLParagraphElement>(decodeURIComponent(hash))
        ?.scrollIntoView({ block: 'nearest' })
    }
  }, [])

  return (
    <>
      <NextSeo
        title={process.env.BLOG.title}
        description="记录自己的前端工作总结，学习积累，技术思考，疑难问题"
        canonical={`${process.env.BLOG.site}/tags`}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={`${process.env.BLOG.site}/tags`}
        title={process.env.BLOG.title}
        images={[]}
        datePublished="2020-01-01T08:00:00+08:00"
        dateModified={process.env.UPDATED_DATE}
        authorName="marsk"
        description="记录自己的前端工作总结，学习积累，技术思考，疑难问题"
      />
      <section className="flex flex-col gap-6">
        {tags.map((tag) => (
          <TagContainer key={tag.name} tag={tag} />
        ))}
      </section>
    </>
  )
}

export default Tags

export const getStaticProps = async () => {
  const [tags] = await Promise.all([getAllTags()])
  return {
    props: { tags },
  }
}
