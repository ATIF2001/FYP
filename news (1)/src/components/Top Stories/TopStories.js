import React, { useState, useRef } from 'react'
import './TopStories.css'
import { Tag, Row, Col, Carousel } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import FeatherSvg from './../../images/feather.svg'
import ArrowLeftLineSvg from './../../images/arrowleftwithline.svg'
import ArrowRightLineSvg from './../../images/arrowrightwithline.svg'
import ArrowLeftLineDisabledSvg from './../../images/arrowleftwithlinedisabled.svg'
import ArrowRightLineDisabledSvg from './../../images/arrowrightwithlinedisabled.svg'
import StoriesCard from './StoriesCard'
import FollowCard from './FollowCard'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
const { CheckableTag } = Tag

const TopStories = ({ articles, msg }) => {
  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')

  const onFollowCardChange = currentSlidee => {
    setCurrentSlide(currentSlidee)
  }

  const tagsData = [
    'All',
    'Books',
    'Music',
    'Sports',
    'Android',
    'Google',
    'Nano Technology'
  ]
  const [selectedTags, setSelectedTags] = useState(['All'])
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag)
    setSelectedTags(nextSelectedTags)
  }
  const filteredArticles = articles?.filter(el =>
    el.title?.toLowerCase().includes(search)
  )
  return (
    <>
      <div className='bold fs-20'>{msg || 'Top Stories for you'}</div>
      <Row>
        <Col xs={18}>
          <div style={{ marginTop: '1.5rem' }}>
            {tagsData.map(tag => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                className='fs-15'
                onChange={checked => handleChange(tag, checked)}
                style={{
                  boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.04)',
                  borderRadius: '20px',
                  padding: '5px 12px',
                  marginLeft: '0.7rem'
                }}
              >
                {tag}
              </CheckableTag>
            ))}
            <span style={{ marginLeft: '10px', fontSize: '1.7rem' }}>
              <MoreOutlined style={{ transform: 'rotate(90deg)' }} />
            </span>
          </div>
          <div
            className='search_bar'
            style={{ marginTop: '1.5rem', width: '82%' }}
          >
            <Input
              className='border-0'
              style={{
                background: 'rgba(47, 159, 248, 0.04)',
                borderRadius: '4px',
                width: '118%',
                height: '46px',
                marginLeft: '20px'
              }}
              size='large'
              onChange={e => {
                setSearch(e.target.value)
              }}
              suffix={
                <span>
                  <SearchOutlined />
                </span>
              }
            />
          </div>
          <div style={{ marginTop: '2rem' }}>
            {filteredArticles?.length ? (
              <StoriesCard size='large' articleLarge={filteredArticles[0]} />
            ) : (
              ''
            )}
          </div>
          {filteredArticles?.length ? (
            <Row style={{ marginTop: '1rem', width: '110%' }}>
              {filteredArticles.map((el, i) => {
                return (
                  <Col xs={12} key={i} style={{ marginTop: '1rem' }}>
                    <div style={{ marginRight: '4rem' }}>
                      <StoriesCard article={el} />
                    </div>
                  </Col>
                )
              })}
            </Row>
          ) : (
            'No results found'
          )}
          <div
            className='bold fs-20 space-between'
            style={{ marginBlock: '2rem' }}
          >
            <div>
              <img src={FeatherSvg} alt='' />
              &nbsp; Creators you should follow
            </div>
            <div style={{ marginRight: '6rem' }}>
              {currentSlide === 0 ? (
                <img src={ArrowLeftLineDisabledSvg} alt='' />
              ) : (
                <img
                  src={ArrowLeftLineSvg}
                  alt=''
                  onClick={() => {
                    carouselRef.current.prev()
                  }}
                />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {currentSlide === 1 ? (
                <img src={ArrowRightLineDisabledSvg} alt='' />
              ) : (
                <img
                  src={ArrowRightLineSvg}
                  alt=''
                  onClick={() => {
                    carouselRef.current.next()
                  }}
                />
              )}
            </div>
          </div>
          <div className='follow_cards'>
            <Carousel
              ref={carouselRef}
              afterChange={onFollowCardChange}
              style={{ width: '100%', margin: 0, position: 'absolute' }}
              dots={false}
            >
              <div>
                <Row>
                  <Col xs={4} style={{ marginRight: '1.3rem' }}>
                    <FollowCard />
                  </Col>
                  <Col xs={4} style={{ marginRight: '1.3rem' }}>
                    <FollowCard />
                  </Col>
                  <Col xs={4} style={{ marginRight: '1.3rem' }}>
                    <FollowCard />
                  </Col>
                  <Col xs={4} style={{ marginRight: '1.3rem' }}>
                    <FollowCard />
                  </Col>
                  <Col xs={4} style={{ marginRight: '1.3rem' }}>
                    <FollowCard />
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col xs={4}>
                    <FollowCard />
                  </Col>
                </Row>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default TopStories
