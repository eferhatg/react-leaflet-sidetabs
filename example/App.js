/* eslint-disable */
import React, { Component } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Tab, Sidebar } from '../lib/index.js'
import { FiHome, FiChevronRight, FiSearch, FiSettings } from "react-icons/fi"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      selected: 'home',
      glowing:'search'
    }
  }

  onClose() {
    this.setState({collapsed: true})
  }
  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id,
      glowing: null
    })
  }

  render () {
    return (
      <div>
        <MapContainer className="mapStyle" center={[41.09, 28.97]} zoom={7}>
          <TileLayer
            attribution=""
            url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          />
        </MapContainer>
        <Sidebar
          id="sidebar"
          position="right"
          collapsed={this.state.collapsed}closeIcon={<FiChevronRight />}
          selected={this.state.selected}
          glowing = {this.state.glowing}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
        >
           <Tab id="home" header="Home" icon={<FiHome />}>
            <p>No place like home!</p>
           </Tab>
           <Tab id="search" header="Search" icon={<FiSearch />} >
            <p>The noblest search is the search for excellence!</p>
           </Tab>
           <Tab id="settings" header="Settings" anchor="bottom" icon={<FiSettings />}>
            <p>We don't want privacy so much as privacy settings!</p>
           </Tab>
        </Sidebar>
      </div>
    )
  }
}
