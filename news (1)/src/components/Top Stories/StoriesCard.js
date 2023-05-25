import React from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import { Card, Row, Col } from 'antd'
import './TopStories.css'
import ShareSvg from './../../images/share.svg'
import PocketSvg from './../../images/pocket.svg'
import { format } from 'timeago.js'

const StoriesCard = ({ size, articleLarge, article }) => {
  const navigate= useNavigate();
  const location = useLocation();
  const handleClick = async()=>{
    navigate(location.pathname +'/'+ article._id)
  }
  return (
    <>
      {size === 'large' && articleLarge ? (
        <div className='story_card'>
          <Card
            style={{
              width: 914
            }}
          >
            <div className='space-between'>
              <div>
                <div style={{ fontWeight: 500 }} className='fs-17'>
                  {articleLarge.title}
                </div>
                <div className='text-muted' style={{ width: '90%' }}>
                  {articleLarge?.description ? articleLarge.description.slice(0, 105)+'...' : ''}
                </div>
                <Row
                  style={{
                    paddingTop: `${!articleLarge.description ? '4rem' : '1rem'}`
                  }}
                >
                  <Col xs={6}>{articleLarge?.source?.name ? articleLarge.source.name : articleLarge?.src}</Col>
                  <Col xs={6}>{format(articleLarge?.publishedAt)}</Col>
                  <Col xs={6}>
                    <span style={{ color: '#0768B5' }}>
                      <img src={ShareSvg} alt='' />
                      &nbsp; Share
                    </span>
                  </Col>
                  <Col xs={6}>
                    <span style={{ color: '#0768B5' }}>
                      <img src={PocketSvg} alt='' />
                      &nbsp; Read Later
                    </span>
                  </Col>
                </Row>
              </div>
              <div>
                <img
                  src={articleLarge?.urlToImage}
                  alt=''
                  style={{ width: '170px' }}
                />
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <div className='story_card' style={{cursor: 'pointer'}} onClick={handleClick}>
          <Card
            style={{
              width: 440,
            }}
          >
            <div className='space-between'>
              <div>
                <div className='fs-17' style={{ fontWeight: 500 }}>
                  {article?.title?.substr(0, 50) + '...'}
                </div>
                <div className='text-muted' style={{ width: '90%' }}>
                  {article?.description ? article.description.substr(0, 80) + '...' : ''}
                </div>
              </div>
              <div>
                <img
                  src={article?.urlToImage}
                  alt=''
                  style={{ width: '160px' }}
                />
              </div>
            </div>
            <Row
              style={{
                paddingTop: '1rem'
              }}
            >
              <Col xs={6}>{article?.source?.name ? article.source.name.substr(0, 10) + '...': article?.src}</Col>
              <Col xs={6}>{format(article?.publishedAt)}</Col>
              <Col xs={6}>
                <span style={{ color: '#0768B5' }}>
                  <img src={ShareSvg} alt='' />
                  &nbsp; Share
                </span>
              </Col>
              <Col xs={6}>
                <span style={{ color: '#0768B5' }}>
                  <img src={PocketSvg} alt='' />
                  &nbsp; Read Later
                </span>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </>
  )
}

export default StoriesCard
