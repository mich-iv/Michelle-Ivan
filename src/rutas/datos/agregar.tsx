import { Component } from 'react'
import EditorTexto from '../../componentes/editor/editorTexto'

export default class Agregar extends Component {
  render() {
    return (
      <div>
        <EditorTexto/>
        <textarea
            name='editorMCE'
            id="editorMCE"
            hidden
        />
      </div>
    )
  }
}
