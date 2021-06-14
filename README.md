# react-leaflet-sidetabs [(DEMO)](https://eferhatg.com/react-leaflet-sidetabs/)

> A [react-leaflet](https://github.com/PaulLeCam/react-leaflet) plugin of [sidebar-v2](https://github.com/Turbo87/sidebar-v2)

[![NPM](https://img.shields.io/npm/v/react-leaflet-sidetabs.svg)](https://www.npmjs.com/package/react-leaflet-sidetabs) ![npm downloads](https://img.shields.io/npm/dw/react-leaflet-sidetabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)][![Node.js CI](https://github.com/TA-Geoforce/react-leaflet-sidetabs/actions/workflows/node.js.yml/badge.svg?branch=feature%2Fupdate-repo)](https://github.com/TA-Geoforce/react-leaflet-sidetabs/actions/workflows/node.js.yml)

inspired by [@condense/react-leaflet-sidebarv2](https://github.com/condense/react-leaflet-sidebarv2)


## Complete example with react-leaflet-sidetabs

To get started, to be able to run the example you have execute in the package.json in the root folder the script:

```bash
prepare
```
## Usage

Sidebar should be sibling of react-leaflet Map component. 

[react-icons](https://github.com/react-icons/react-icons) is used at the example below. Any other icon library can also be used by giving icon names as string to *icon* and *closeIcon* props. 

*onClose* and *onOpen* callbacks should be given as props to change state *collapsed* and *selected* especially.

Sidebar is alignable to left and right with *position* prop. Also Tabs are alignable to bottom and top with *anchor* prop.

To get started, to be able to run the example you have execute:
```bash
npm install
```
in the folders ```react-leaflet-sidetabs``` and ```example```.

```jsx
import React, { Component } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Tab } from '../../src/index.js'
import { Sidebar } from '../../src/index.js'

import { FiHome, FiChevronRight, FiSearch, FiSettings } from "react-icons/fi";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      selected: 'home',
      glowing:'search'
    };
  }

  onClose() {
    this.setState({collapsed: true});
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
```

You can find the following example in the folder ```example```. Run the above code by executing the following scripts in package.json in the ```example``` folder, which is stated underneath:

1) ```start```


## License

MIT © [eferhatg](https://github.com/eferhatg)
