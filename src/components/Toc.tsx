import React, { useEffect } from 'react'
import { useRemarkSync } from 'react-remark'
import remarkGfm from 'remark-gfm'
import rehypeAddTitleAttribute from '@script/rehype-add-title-attribute'

const baseLine = 156
const distanceActionToCase1 = baseLine - 6

const openDebug = () => {
  const rootMarginIndicator = document.createElement('div')
  rootMarginIndicator.style = `position:fixed;top:0;left:0;right:0;height: ${baseLine}px;background-color: #ccc;opacity: 0.3;pointer-events: none;`
  document.body.appendChild(rootMarginIndicator)
}

const createToc = () => {
  document.documentElement.style.scrollPaddingTop = `${distanceActionToCase1}px`
  let isInit = true
  let tocJumpTo: Element | null = null
  let prevScollTop = document.documentElement.scrollTop
  const observer = new IntersectionObserver(
    (entries) => {
      const isScrollDown = prevScollTop > document.documentElement.scrollTop
      const isScrollUp = !isScrollDown
      prevScollTop = document.documentElement.scrollTop
      if (tocJumpTo) {
        tocJumpTo = null
        return
      }
      let initClosestHeading = entries[0]
      //
      let willActiveHeading: Element | null = null

      entries.forEach((entry) => {
        const { top } = entry.boundingClientRect
        if (isInit) {
          if (
            Math.abs(top - baseLine) <=
            Math.abs(initClosestHeading.boundingClientRect.top - baseLine)
          ) {
            initClosestHeading = entry
          }
          return
        }
        if (entry.isIntersecting && isScrollDown) {
          willActiveHeading = entry.target
        } else if (!entry.isIntersecting && isScrollUp) {
          willActiveHeading = entry.target
        }
      })
      willActiveHeading!?.dispatchEvent(
        new CustomEvent('active', {
          detail: isScrollDown ? 'prev' : 'cur',
        })
      )

      if (isInit) {
        const { hash } = location
        if (hash) {
          ;(document.querySelector(`.toc a[href='${hash}']`) as HTMLAnchorElement).click()
        } else {
          initClosestHeading.target.dispatchEvent(new CustomEvent('active'))
        }
        isInit = false
      }
    },
    {
      threshold: [1],
      root: document,
      rootMargin: `-${baseLine}px 0px 0px 0px`,
    }
  )

  const toc = [...document.querySelectorAll('.toc a')] as HTMLAnchorElement[]

  const findToc = (heading: Element) => {
    return toc.find(
      (t) =>
        `#${heading.id}` ===
        decodeURIComponent(t.getAttribute('href') as string)
    )
  }

  const article = document.querySelector('.markdown-body')
  const allHeadings = article?.querySelectorAll('h1,h2,h3,h4')
  allHeadings?.forEach((heading, index) => {
    let a = findToc(heading)
    a?.addEventListener('click', () => {
      tocJumpTo = heading
      tocJumpTo.dispatchEvent(
        new CustomEvent('active', {
          detail: 'cur',
        })
      )
      prevScollTop = document.documentElement.scrollTop
    })
    heading.addEventListener('active', (e) => {
      toc.forEach((t) => t.classList.remove('active-heading'))
      if ((e as CustomEvent).detail === 'prev' && index !== 0) {
        const prevA = findToc(allHeadings[index - 1])
        prevA?.classList.add('active-heading')
        return
      }
      a?.classList.add('active-heading')
    })
    observer?.observe(heading)
  })
  return observer
}

type TocProps = {
  content: string
  debug?: boolean
}
const Toc: React.FC<TocProps> = ({ content, debug }) => {
  const tocReactContent = useRemarkSync(content, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeAddTitleAttribute],
  })
  useEffect(() => {
    debug && openDebug()
    let tocObserver: IntersectionObserver | null = createToc()
    return () => {
      tocObserver?.disconnect()
      tocObserver = null
    }
  }, [])

  return <div className="text-sm toc">{tocReactContent}</div>
}

export default Toc
