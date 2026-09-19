import React, { useCallback, useMemo } from 'react'
import { createEditor, Node } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const DescriptionRenderer = ({ value }) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback(props => {
    const { attributes, children, element } = props

    const style = {}

    

    if ('align' in element) {
      style.textAlign = element.align
    }

    switch (element.type) {
      case 'block-quote':
        return (
          <blockquote style={style} {...attributes}>
            {children}
          </blockquote>
        )

      case 'bulleted-list':
        return (
          <ul style={style} {...attributes}>
            {children}
          </ul>
        )

      case 'numbered-list':
        return (
          <ol style={style} {...attributes}>
            {children}
          </ol>
        )

      case 'heading-one':
        return (
          <h1 style={style} {...attributes}>
            {children}
          </h1>
        )

      case 'heading-two':
        return (
          <h2 style={style} {...attributes}>
            {children}
          </h2>
        )

      case 'list-item':
        return (
          <li style={style} {...attributes}>
            {children}
          </li>
        )

      default:
        return (
          <p style={style} {...attributes}>
            {children}
          </p>
        )
    }
  }, [])

  const renderLeaf = useCallback(({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }

    if (leaf.italic) {
      children = <em>{children}</em>
    }

    if (leaf.underline) {
      children = <u>{children}</u>
    }

    if (leaf.code) {
      children = <code>{children}</code>
    }

    return <span {...attributes}>{children}</span>
  }, [])

  const checkValue = (value) => {
    if(value == [{}]){
        return null;
    }
    else{
        return value;
    }
  }

  return (
    <Slate
      editor={editor}
      
      initialValue={checkValue(value)}
    >
        
      <Editable
        readOnly
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
  )
}

export default DescriptionRenderer