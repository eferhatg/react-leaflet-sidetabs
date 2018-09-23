# react-leaflet-sidetabs

> A react-leaflet plugin of @Turbo87/sidebar-v2 https://eferhatg.com/react-leaflet-sidetabs/

[![NPM](https://img.shields.io/npm/v/react-leaflet-sidetabs.svg)](https://www.npmjs.com/package/react-leaflet-v2sidebar-v2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

inspired by [@condense/react-leaflet-sidebarv2](https://github.com/condense/react-leaflet-sidebarv2)

[(DEMO)](https://eferhatg.com/react-leaflet-sidetabs/)

## Install

```bash
npm install --save react-leaflet-sidetabs
```

## Usage

Sidebar should be sibling of react-leaflet Map component. 

[react-icons](https://github.com/react-icons/react-icons) is used at the example below. Any other icon library can also be used by giving icon names as string to *icon* and *closeIcon* props. 

*onClose* and *onOpen* callbacks should be given as props to change state *collapsed* and *selected* especially.

Sidebar is alignable to left and right with *position* prop. Also Tabs are alignable to bottom and top with *anchor* prop.


```jsx
import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Sidebar, Tab } from 'react-leaflet-sidetabs'
import { FiHome, FiChevronRight, FiSearch, FiSettings } from "react-icons/fi";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      selected: 'home',
    };
  }

  onClose() {
    this.setState({collapsed: true});
  }
  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id,
    })
  }

  render () {
    return (
      <div>
        <Sidebar
          id="sidebar"
          position="right"
          collapsed={this.state.collapsed}
          closeIcon={<FiChevronRight />}
          selected={this.state.selected}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
        >
           <Tab id="home" header="Home" icon={<FiHome />}>
            <p>No place like home!</p>
           </Tab>
           <Tab id="search" header="Search" icon={<FiSearch />}>
            <p>The noblest search is the search for excellence!</p>
           </Tab>
           <Tab id="settings" header="Settings" anchor="bottom" icon={<FiSettings />}>
            <p>We don't want privacy so much as privacy settings!</p>
           </Tab>           
        </Sidebar>

        <Map className="mapStyle" center={[0, 0]} zoom={7}>
          <TileLayer
            attribution=""
            url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          />
        </Map>
      </div>
    )
  }
}
```

## License

MIT © [eferhatg](https://github.com/eferhatg)
