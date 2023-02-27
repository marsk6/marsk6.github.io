import styled from '@emotion/styled'
import { css, cx } from '@emotion/css'
import React, { ReactNode, useState } from 'react'

type Item = {
  label: ReactNode
  content: ReactNode
}

type TimelineProps = {
  items: Array<Item>
}
const TimeLine: React.FC<TimelineProps> = ({ items }) => {
  const renderItems = () => {
    return items.map((item, index) => {
      return <TimelineItem isFirst={index === 0} key={index} item={item} />
    })
  }
  return <div className="flex flex-col">{renderItems()}</div>
}

export default TimeLine

const Div = styled.div`
  display: grid;
  grid-template-columns: 140px 108px auto;
`
const firstCls = css`
  top: 8px;
`

const TimelineItem: React.FC<{ item: Item; isFirst?: boolean }> = ({
  item,
  isFirst,
}) => {
  return (
    <Div>
      <div className="whitespace-nowrap leading-6 dark:text-slate-400">
        {item.label}
      </div>
      <div className="flex flex-col items-center relative">
        <div
          className={cx(
            'w-0.5 bg-gray-200 flex-1 absolute',
            'h-full',
            isFirst && firstCls
          )}
        />
        <div
          className={cx(
            'w-3 h-3 border-2 border-gray-400 rounded-full bg-white flex-grow-0 absolute top-2'
          )}
        />
      </div>
      <div className="pb-24">{item.content}</div>
    </Div>
  )
}
