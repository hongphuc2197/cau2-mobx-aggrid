import React, { Component, PureComponent } from 'react'
import { map } from 'lodash'
import uuid from 'uuid/v4'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import { LoadableComponent, Toastify } from '../../components/util'
import { routesAuthen } from '../../config'
import { Store } from '../../tools'
import './index.less'

class Innos extends Component {
  render () {
    return (
      <BrowserRouter>
        <>
          <Toastify />
          <Switch>
            {map(routesAuthen, route => (
              <Route
                key={uuid()}
                exact={route.exact}
                path={route.path}
                render={props => {
                  const Comp = LoadableComponent(import(`../../components/${route.component}`))
                  return <Comp route={route} {...props} />
                }}
              />
            ))}
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

const store = new Store()
class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <Innos />
      </Provider>
    )
  }
}

export default App
