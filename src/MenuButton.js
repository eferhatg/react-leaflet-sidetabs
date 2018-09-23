import React from 'react'
import { PropTypes } from 'prop-types'

const MenuButton = props => {
  const icon =
    props.icon === 'string' ? <i className={props.icon} /> : props.icon
  const active = props.id === props.selected && !props.collapsed ? ' active' : ''
  const disabled = props.disabled ? ' disabled' : ''

  return (
    <li className={active + disabled} key={props.id}>
      <a
        href={`#${props.id}`}
        role='tab'
        onClick={e => props.disabled || (props.collapsed ? props.onOpen(props.id) : (
          props.selected === props.id ? props.onClose() : props.onOpen(props.id)
        ))}
      >{' '}{icon}
      </a>
    </li>
  )
}

MenuButton.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  collapsed: PropTypes.bool
}

export default MenuButton
