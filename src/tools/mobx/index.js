import { Authen } from './authen'

class Store {
  constructor () {
    this.Authen = new Authen(this)
  }
}

export { Store }
