import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'gatsby' 

const AppMenu = () => (
    <div> 
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">
            <Link to="/">Home</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">
            <Link to="/blog">Blog</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">Resume</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">
            <Link to="/contact">Contact</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">
            <Link to="/about">About</Link>
          </span>
        </Menu.Item>
    </Menu>
    </div>
)

export default AppMenu