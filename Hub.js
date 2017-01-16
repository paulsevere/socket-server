// const io = require('socket.io')(1337)
import io from 'socket.io'
import { blue, green, yellow, cyan } from './utils/color'
import { EditorState, convertFromRaw } from 'draft-js';
import Imm from 'immutable'

export class Hub {
  constructor(port) {
    this.editor = EditorState.createEmpty();
    this.getEditor = () => {
      return this.editor
    }
    this.editorStuff = this.editorStuff.bind(this)
    this.io = io(port).on('connection', this.handleConnection.bind(this))
    cyan("New Hub Created On " + port)
  }
  editorStuff(contentObj) {
    // contentObj.editorState = this.editor;
    // console.log(contentObj.editorState.getCurrentContent)
    // EditorState.push(this.editor, co)
    // console.log(this.editor.getCurrentContent())
  }
  handleConnection(socket) {
    green("Socket connected")

    socket.on('push-content-state', data => {
      socket.broadcast.emit('new-content-state', data)
      // this.io.emit('new-content-state', data);
      // console.log(convertFromRaw(data))
      // this.editor = EditorState.set(data)

    // this.io.emit('test2', data)
    // EditorState.push(this.editor, data.contentState, data.changeType);
    })
    socket.on('message', message=>console.log(socket.id,message))

  }


}

const myHub = new Hub(3001);
