
import {Editor} from "@tinymce/tinymce-react";

function EditorTexto(){
    return(
        <Editor
            licenseKey = "gpl"
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
            }}
        />
    )
}

export default EditorTexto;