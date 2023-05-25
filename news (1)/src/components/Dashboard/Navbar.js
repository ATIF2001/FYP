import React, { useState } from 'react'
import { Row, Col, Button, Input, Dropdown } from 'antd'
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ArrowDownSvg from './../../images/arrowdown.svg'
import UserSvg from './../../images/user.svg'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useGetUserByIdQuery } from '../../services/nodeApi'

const Navbar = () => {
  const navigate = useNavigate()
  const userId = jwtDecode(Cookies.get('jwt')).id
  const { data } = useGetUserByIdQuery(userId)
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  const userSignOut = () => {
    Cookies.set('jwt', '')
    navigate('/login')
  }
  window.addEventListener('scroll', changeNavbarColor)
  const items = [
    {
      key: '1',
      label: <span onClick={userSignOut}>Logout</span>
    }
  ]

  return (
    <>
      <div
        className='nav_fixed'
        style={{ background: `${colorChange ? 'rgb(250,250,250)' : ''}` }}
      >
        <Row
          className='vertical-center'
          style={{
            paddingInline: '3rem',
            paddingBlock: '1.1rem'
          }}
        >
          <Col xs={4}>
            <div>
              <img
                style={{ width: '29px', height: '35px' }}
                src={require('./../../images/image.png')}
                alt=''
              />
              <span
                className='bold fs-18'
                style={{
                  paddingLeft: '15px',
                  color: '#0768B5'
                }}
              >
                News Website
              </span>
            </div>
          </Col>
          <Col xs={8}>
            <div className='search_bar'>
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
                suffix={
                  <span>
                    <SearchOutlined />
                  </span>
                }
              />
            </div>
          </Col>
          <Col xs={6}>
            <Button
              style={{
                background: 'transparent',
                height: '46px',
                marginLeft: '8rem'
              }}
              size='large'
            >
              <span>Latest News </span>
              <span style={{ paddingLeft: '7.5rem' }}>
                <ArrowRightOutlined />
              </span>
            </Button>
          </Col>
          <Col xs={3}></Col>
          <Col xs={3}>
            <div className='right'>
              <Dropdown
                trigger='click'
                menu={{
                  items
                }}
              >
                <div>
                  <span>
                    <span style={{ paddingRight: '.5rem' }}>
                      <img src={UserSvg} alt='' />
                    </span>
                    <span className='fs-15'>
                      {data?.data.email ? data.data.email : 'Guest User'}
                    </span>
                  </span>
                  <span style={{ paddingLeft: '1.2rem' }}>
                    <img src={ArrowDownSvg} alt='' />
                  </span>
                </div>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Navbar
