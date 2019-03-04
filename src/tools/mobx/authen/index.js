import { observable, action } from 'mobx'
import _ from 'lodash'

class Authen {
  constructor (Store) {
    this.Store = Store
  }
  @observable Todos = []
  @action addTodo = (payload) => this.Todos.push(payload)
  @action editTodo = (index, payload) => this.Todos = _.map(this.Todos, value => value.id === index ? payload : value)
  @action deleteTodo = (index) => _.remove(this.Todos, (value) => value.id === index)
}

export { Authen }
