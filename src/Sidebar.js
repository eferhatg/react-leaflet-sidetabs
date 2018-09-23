import React from 'react'
import { PropTypes } from 'prop-types'
import Tab from './Tab'
import MenuButton from './MenuButton'
import './sidebar.css'

const { MapComponent } = require('react-leaflet')

const TabType = PropTypes.shape({
  type: PropTypes.oneOf([Tab])
})

class Sidebar extends MapComponent {
  onClose(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.onClose && this.props.onClose(e)
  }

  onOpen(e, tabid) {
    e.preventDefault()
    e.stopPropagation()
    this.props.onOpen && this.props.onOpen(tabid)
  }

  renderPanes(children) {
    return React.Children.map(children, p =>
      React.cloneElement(p, {
        onClose: this.onClose.bind(this),
        closeIcon: this.props.closeIcon,
        active: p.props.id === this.props.selected,
        position: this.props.position || 'left'
      })
    )
  }

  render() {
    const position = ` sidebar-${this.props.position || 'left'}`
    const collapsed = this.props.collapsed ? ' collapsed' : ''
    const tabs = React.Children.toArray(this.props.children)
    const bottomtabs = tabs.filter(t => t.props.anchor === 'bottom')
    const toptabs = tabs.filter(t => t.props.anchor !== 'bottom')

    return (
      <div
        id={this.props.id}
        className={`sidebar leaflet-touch${position}${collapsed}`}
        ref={el => {
          this.rootElement = el
        }}
      >
        <div className='sidebar-tabs'>
          <ul role='tablist'>
            {toptabs.map(t =>
              <MenuButton
                key={t.props.id}
                id={t.props.id}
                icon={t.props.icon}
                disabled={t.props.disabled}
                selected={this.props.selected}
                collapsed={this.props.collapsed}
                onClose={this.props.onClose}
                onOpen={this.props.onOpen} />)}
          </ul>
          <ul role='tablist'>
            {bottomtabs.map(t =>
              <MenuButton
                key={t.props.id}
                id={t.props.id}
                icon={t.props.icon}
                disabled={t.props.disabled}
                selected={this.props.selected}
                collapsed={this.props.collapsed}
                onClose={this.props.onClose}
                onOpen={this.props.onOpen} />)}
          </ul>
        </div>
        <div className='sidebar-content'>
          {this.renderPanes(this.props.children)}
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  id: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  selected: PropTypes.string,
  closeIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(TabType), TabType])
}

export default Sidebar
