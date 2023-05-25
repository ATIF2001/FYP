import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Card, Button, Collapse, Input, Row, Col, Carousel, Form } from 'antd'
import './Dashboard.css'
import WorldSvg from './../../images/world.svg'
import BriefcaseSvg from './../../images/briefcase.svg'
import MessageSvg from './../../images/message.svg'
import BellSvg from './../../images/bell.svg'
import SettingSvg from './../../images/setting.svg'
import AimSvg from './../../images/aim.svg'
import SunSvg from './../../images/sun.svg'
import FeatherSvg from './../../images/feather.svg'
import TextFileSvg from './../../images/textFile.svg'
import ArrowLeftSvg from './../../images/arrowleft.svg'
import ArrowRightSvg from './../../images/arrowright.svg'

const { Panel } = Collapse

const Sidebar = () => {
  const location = useLocation()
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <div className='main'>
        <div className='left-bar'>
          <div className='left-content'>
            <ul>
              <li
                className={`item ${
                  location.pathname.endsWith('topstories') ? 'side_active' : ''
                }`}
              >
                <Link
                  to='/dashboard/topstories'
                  style={{ textDecoration: 'none' }}
                  className={`text-black ${
                    location.pathname.endsWith('topstories')
                      ? 'side_activee'
                      : ''
                  }`}
                >
                  <img src={WorldSvg} alt='' style={{ width: '18px' }} />
                  <span style={{ paddingLeft: '10px' }}>Top Stories</span>
                </Link>
              </li>

              <li
                className={`item ${
                  location.pathname.endsWith('country') ? 'side_active' : ''
                }`}
              >
                <Collapse ghost expandIconPosition='end'>
                  <Panel
                    header={
                      <>
                        <img
                          src={BriefcaseSvg}
                          alt=''
                          style={{ width: '18px' }}
                        />
                        <span style={{ paddingLeft: '10px' }}>
                          Around the World
                        </span>
                      </>
                    }
                    key='1'
                  >
                    <ul className='fs-15' style={{ lineHeight: '1.3rem' }}>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('country/us')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/country/us'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('country/us')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>USA</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('country/gb')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/country/gb'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('country/gb')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>UK</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('country/ca')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/country/ca'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('country/ca')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Canada</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('country/au')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/country/au'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('country/au')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Australia</span>
                        </Link>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </li>
              <li
                className={`item ${
                  location.pathname.endsWith('localnews') ? 'side_active' : ''
                }`}
              >
                <Collapse ghost expandIconPosition='end'>
                  <Panel
                    header={
                      <>
                        <img
                          src={BriefcaseSvg}
                          alt=''
                          style={{ width: '18px' }}
                        />
                        <span style={{ paddingLeft: '10px' }}>Local News</span>
                      </>
                    }
                    key='1'
                  >
                    <ul className='fs-15' style={{ lineHeight: '1.3rem' }}>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('local/health')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/local/health'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('local/health')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Health</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('local/sports')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/local/sports'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('local/sports')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Sports</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('local/entertainment')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/local/entertainment'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('local/entertainment')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>
                            Entertainment
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('local/business')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/local/business'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('local/business')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Business</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('local/showbiz')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/local/showbiz'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('local/showbiz')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Showbiz</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes('local/technology')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/local/technology'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.includes('local/technology')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>
                            Technology
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </li>

              <li
                className={`item ${
                  location.pathname.endsWith('users') ? 'side_active' : ''
                }`}
              >
                <Collapse ghost expandIconPosition='end'>
                  <Panel
                    header={
                      <>
                        <img
                          src={BriefcaseSvg}
                          alt=''
                          style={{ width: '18px' }}
                        />
                        <span style={{ paddingLeft: '10px' }}>
                          International News
                        </span>
                      </>
                    }
                    key='1'
                  >
                    <ul className='fs-15' style={{ lineHeight: '1.3rem' }}>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith('int/health')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/int/health'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.endsWith('int/health')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Health</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith('int/business')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/int/business'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.endsWith('int/business')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Business</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith('int/sports')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/int/sports'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.endsWith('int/sports')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Sports</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith('int/entertainment')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/int/entertainment'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.endsWith('int/entertainment')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>
                            Entertainment
                          </span>
                        </Link>
                      </li>

                      <li
                        className={`nested_item ${
                          location.pathname.endsWith('int/general')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/int/general'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.endsWith('int/general')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>General</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith('int/science')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/int/science'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.endsWith('int/science')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>Science</span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith('int/technology')
                            ? 'side_active'
                            : ''
                        }`}
                      >
                        <Link
                          to='/dashboard/int/technology'
                          style={{ textDecoration: 'none' }}
                          className={`text-black ${
                            location.pathname.endsWith('int/technology')
                              ? 'side_activee'
                              : ''
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=''
                            style={{ width: '18px' }}
                          />
                          <span style={{ paddingLeft: '10px' }}>
                            Technology
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </li>

              <li
                className={`item ${
                  location.pathname.endsWith('bookmarkedNews')
                    ? 'side_active'
                    : ''
                }`}
              >
                <Link
                  to='/dashboard/bookmarkedNews'
                  style={{ textDecoration: 'none' }}
                  className={`text-black ${
                    location.pathname.endsWith('bookmarkedNews')
                      ? 'side_activee'
                      : ''
                  }`}
                >
                  <img src={MessageSvg} alt='' style={{ width: '18px' }} />
                  <span style={{ paddingLeft: '10px' }}>Bookmarked News</span>
                </Link>
              </li>

              <li
                className={`item ${
                  location.pathname.endsWith('discussion') ? 'side_active' : ''
                }`}
              >
                <Link
                  to='/dashboard/discussion'
                  style={{ textDecoration: 'none' }}
                  className={`text-black ${
                    location.pathname.endsWith('discussion')
                      ? 'side_activee'
                      : ''
                  }`}
                >
                  <img src={MessageSvg} alt='' style={{ width: '18px' }} />
                  <span style={{ paddingLeft: '10px' }}>Discussion</span>
                </Link>
              </li>
              <li
                className={`item ${
                  location.pathname.endsWith('notification')
                    ? 'side_active'
                    : ''
                }`}
              >
                <Link
                  to='/dashboard/notification'
                  style={{ textDecoration: 'none' }}
                  className={`text-black ${
                    location.pathname.endsWith('notification')
                      ? 'side_activee'
                      : ''
                  }`}
                >
                  <img src={BellSvg} alt='' style={{ width: '18px' }} />
                  <span style={{ paddingLeft: '10px' }}>Notification</span>
                </Link>
              </li>
              <li
                className={`item ${
                  location.pathname.endsWith('setting') ? 'side_active' : ''
                }`}
              >
                <Link
                  to='/dashboard/setting'
                  style={{ textDecoration: 'none' }}
                  className={`text-black ${
                    location.pathname.endsWith('setting') ? 'side_activee' : ''
                  }`}
                >
                  <img src={SettingSvg} alt='' style={{ width: '18px' }} />
                  <span style={{ paddingLeft: '10px' }}>
                    News Feed Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='page-content'>
          <Outlet />
        </div>
        <Row className='pe-rem-1'>
          <Col xs={6}>
            <div className='rightside_card'>
              <Card
                style={{
                  width: 300
                }}
              >
                <div className='space-between'>
                  <div>Coimbatore, Tamil Nadu</div>
                  <div>
                    <img src={AimSvg} alt='' />
                  </div>
                </div>
                <hr style={{ opacity: 0.2 }} />
                <div
                  className='space-between'
                  style={{
                    marginTop: 15
                  }}
                >
                  <div>
                    <div className='fs-15'>Sunny </div>
                    <div className='bold fs-26'>31 c</div>
                  </div>
                  <div>
                    <img src={SunSvg} alt='' />
                  </div>
                </div>
                <div>
                  <span>Celcius</span>
                  <span style={{ marginLeft: '1.5rem' }} className='text-muted'>
                    Fahrenheit
                  </span>
                </div>
              </Card>
            </div>
            <div className='rightside_card' style={{ marginTop: '1.5rem' }}>
              <Card
                style={{
                  width: 300
                }}
              >
                <div className='left'>
                  <div style={{ marginRight: '1rem' }}>
                    <img src={FeatherSvg} alt='' />
                  </div>
                  <div>Become a story writer</div>
                </div>
                <div
                  className='left'
                  style={{
                    marginTop: '1rem'
                  }}
                >
                  <div>Contribute stories and start earning.</div>
                  <div>
                    <Button>Know more</Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className='rightside_card' style={{ marginTop: '1.5rem' }}>
              <Card
                style={{
                  width: 300
                }}
              >
                <div className='space-between'>
                  <div>
                    <span style={{ marginRight: '1rem' }}>
                      <img src={TextFileSvg} alt='' />
                    </span>
                    <span>Quick Bytes</span>
                  </div>
                  <div>
                    <div className='circle'>
                      <img src={ArrowLeftSvg} alt='' />
                    </div>
                    <div className='circle'>
                      <img src={ArrowRightSvg} alt='' />
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: 0.2 }} />
                <Carousel effect='fade'>
                  <div>
                    <span>
                      The price of petrol remained unchanged on July 6 after
                      reaching a new record high on the previous day, according
                      to a price notification by state-owned fuel retailers. The
                      diesel price remained stable for the second consecutive
                      day.
                      <br />
                      <br />
                      The increase on July 5, 35th in two months, took the
                      petrol price in Delhi closer to Rs 100 per litre-mark. The
                      petrol price in the national capital soared to Rs 99.9 a
                      litre and diesel was priced at Rs 89.4 per litre,
                      according to Bharat Petroleum's price listing.
                    </span>
                  </div>
                  <div>
                    <span>
                      The increase on July 5, 35th in two months, took the
                      petrol price in Delhi closer to Rs 100 per litre-mark. The
                      petrol price in the national capital soared to Rs 99.9 a
                      litre and diesel was priced at Rs 89.4 per litre,
                      according to Bharat Petroleum's price listing.
                    </span>
                  </div>
                </Carousel>
              </Card>
            </div>
            <div className='sub_card' style={{ marginTop: '1.5rem' }}>
              <Card
                style={{
                  width: 300
                }}
              >
                <div className='fs-15'>Subscribe to our newsletter</div>
                <div
                  className='left'
                  style={{
                    marginTop: '1rem'
                  }}
                >
                  <Form
                    name='basic'
                    initialValues={{
                      remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name='email'
                      rules={[
                        {
                          type: 'email',
                          required: true,
                          message: 'Please input your email!'
                        }
                      ]}
                    >
                      <Input
                        placeholder='Enter Email'
                        style={{
                          width: '125%',
                          background: '#F4F9F8',
                          height: '38px'
                        }}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        style={{
                          background: '#2F9FF8',
                          width: '125%',
                          height: '38px'
                        }}
                        className='text-white'
                        htmlType='submit'
                      >
                        Subscribe
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Sidebar
