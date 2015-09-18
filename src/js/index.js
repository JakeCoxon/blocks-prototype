import React from 'react'
import blocksForComponents from './blocks.js'
import staticComponents from './static-components.js'
import editorComponents from './editor-components.js'
import data from './data.js'

let editor = window.location.search === "?editor"

function load() {

    const components = editor ? editorComponents : staticComponents
    const blocks = blocksForComponents(components)

    const root = (
        <div>
            {
                data.map(block => (
                    blocks[block.blockType](block.data)
                ))
            }
        </div>
    );


    React.render(
      root,
      document.querySelector('.container')
    );

}

window.toggleEditor = () => {
    editor = !editor
    load();
}

load();