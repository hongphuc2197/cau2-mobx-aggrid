import React, { Component } from 'react'
import _ from 'lodash'
import uuid from 'uuid/v4'
import { Button, Modal, Input } from 'antd'
import { observer, inject } from 'mobx-react'

import { AgGridWrapper } from '../util'

@inject('store')
@observer
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      isEdit: false,
      id: '',
      title: '',
      content: ''
    }
    this.columnDefs = [
      {
        headerName: 'Title', field: 'title'
      },
      {
        headerName: 'Content', field: 'content'
      },
      {
        headerName: 'Action', field: 'id',
        cellRendererFramework: params => {
          return (
            <>
              <Button type='primary' onClick={() => {
                const { title, content } = this.props.store.Authen.Todos[_.findIndex(this.props.store.Authen.Todos, v => v.id === params.value)]
                this.setState({ title, content })
                this.setState({ isEdit: true, id: params.value, visible: true })
              }}>Edit</Button>
              <Button type='danger' onClick={() => this.props.store.Authen.deleteTodo(params.value)}>Delete</Button>
            </>
          )
        }
      }
    ]
  }
  render () {
    const { Authen } = this.props.store
    const { Todos, addTodo, editTodo } = Authen
    return (
      <div style={{ textAlign: 'center', width: '50%' }}>
        <h3>TodoList</h3>
        <Button
          type='primary'
          shape='round'
          onClick={() => {
            this.setState({ visible: true })
          }}
        >
          Add Todo
        </Button>
        <AgGridWrapper
          columnDefs={this.columnDefs}
          rowData={[...Todos]}
          rowMultiSelectWithClick={true}
          suppressDragLeaveHidesColumns={true}
          rowSelection='single'
          pagination={true}
        />
        <Modal
          visible={this.state.visible}
          title={this.state.isEdit ? 'Edit Todo' : 'Add Todo'}
          onCancel={() => {
            this.setState({ title: '', content: '', visible: false, isEdit: false, id: '' })
          }}
          onOk={() => {
            if (this.state.isEdit) {
              editTodo(this.state.id, {
                id: this.state.id,
                title: this.state.title,
                content: this.state.content
              })
            } else {
              addTodo({
                id: uuid(),
                title: this.state.title,
                content: this.state.content
              })
            }
            this.setState({ title: '', content: '', visible: false, isEdit: false, id: '' })
          }}
        >
          <Input placeholder='Title' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          <Input placeholder='Content' value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />
        </Modal>
      </div>
    )
  }
}

export default App
