import React from 'react'
import { useGetBookmarkedNewsQuery } from '../../services/nodeApi'
import { LoadingOutlined } from '@ant-design/icons'
import TopStories from '../Top Stories/TopStories'
import { Spin } from 'antd'

export default function BookmarkedNews () {
  const { data, isLoading } = useGetBookmarkedNewsQuery()
  if (isLoading)
    return (
      <div style={{ marginTop: '30vh', marginLeft: '50vh' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: '3rem' }} />} />
      </div>
    )
  if (!data?.news?.length) return <>No news in your bookmarks!</>
  return (
    <>{data && <TopStories articles={data.news} msg='Bookmarked News' />}</>
  )
}
