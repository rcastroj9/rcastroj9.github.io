import React from 'react'
import { Menu as AntMenu, Icon } from 'antd'
import { Link } from 'gatsby'

const styles = {
  menu: {
    marginTop: '10vh',
    width: "100%",
    display: 'block',
    position: 'fixed',
    backgroundColor: '#f4f7f6',
    fontFamily: "'Open Sans', sans-serif",
  }
}


class Menu extends React.Component {
  state = {
    current: 'aboutMe',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
    <AntMenu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={styles.menu}>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:700" rel="stylesheet"/>
    <AntMenu.Item key="aboutMe" style={{width: '25%', textAlign: 'center'}}>
      <Icon type="star" />
      <span className="nav-text">
        <Link to="/about">About Me</Link>
      </span>
    </AntMenu.Item>
    <AntMenu.Item key="blog" style={{width: '25%', textAlign: 'center'}}>
      <Icon type="fire" />
      <span className="nav-text">
        <Link to="/blog">Blog</Link>
      </span>
    </AntMenu.Item>
    <AntMenu.Item key="Resume" style={{width: '25%', textAlign: 'center'}}>
      <Icon type="solution" />
      <span className="nav-text">
        Resume
      </span>
    </AntMenu.Item>
    <AntMenu.Item key="contactMe" style={{width: '25%', textAlign: 'center'}}>
      <Icon type="user-add" />
      <span className="nav-text">
        <Link to="/contact">Contact</Link>
      </span>
    </AntMenu.Item>
    </AntMenu>
    );
  }
}

export default Menu