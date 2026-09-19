import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { Editor, Node, Transforms, createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, useSlate, withReact } from 'slate-react'
import { Button, Icon, Toolbar } from './descriptioncomponents/index.jsx'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}
const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']
function DescriptionMaker ({formState, setFormState, edit}) {
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    // wait until we actually have the data before mounting Slate
  if (edit && !formState.description) {
    return <div>Loading…</div> // or null / a skeleton
  }
  
  return (
    <Slate 
    key={edit ? formState.id ?? 'edit' : 'new'}
    className="col-12 d-flex flex-column"
    editor={editor} 
    initialValue={
    edit && formState.description.length > 0
        ? formState.description
        : initialValue
    }
    onChange={(value) => {
    setFormState(prev => ({
      ...prev,
      description: value
    }));
  }}
    >
      <Toolbar>
        <MarkButton format="bold" icon={<i className="fa-solid fa-bold"></i>} />
        <MarkButton format="italic" icon={<i className="fa-solid fa-italic"></i>} />
        <MarkButton format="underline" icon={<i className="fa-solid fa-underline"></i>} />
        <MarkButton format="code" icon={<i className="fa-solid fa-code"></i>} />
        <BlockButton format="heading-one" icon={<i className="fa-solid fa-dice-one"></i>} />
        <BlockButton format="heading-two" icon={<i className="fa-solid fa-dice-two"></i>} />
        <BlockButton format="block-quote" icon={<i className="fa-solid fa-quote-left"></i>} />
        <BlockButton format="numbered-list" icon={<i className="fa-solid fa-list-ol"></i>} />
        <BlockButton format="bulleted-list" icon={<i className="fa-solid fa-list-ul"></i>} />
        <BlockButton format="left" icon={<i className="fa-solid fa-align-left"></i>} />
        <BlockButton format="center" icon={<i className="fa-solid fa-align-center"></i>} />
        <BlockButton format="right" icon={<i className="fa-solid fa-align-right"></i>} />
        <BlockButton format="justify" icon={<i className="fa-solid fa-align-justify"></i>} />
      </Toolbar>
      <Editable
        className="slate"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
    </Slate>
  )
}
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    isAlignType(format) ? 'align' : 'type'
  )
  const isList = isListType(format)
  Transforms.unwrapNodes(editor, {
    match: n => Node.isElement(n) && isListType(n.type) && !isAlignType(format),
    split: true,
  })
  let newProperties
  if (isAlignType(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes(editor, newProperties)
  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)
  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}
const isBlockActive = (editor, format, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => {
        if (Node.isElement(n)) {
          if (blockType === 'align' && isAlignElement(n)) {
            return n.align === format
          }
          return n.type === format
        }
        return false
      },
    })
  )
  return !!match
}
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}
const Element = ({ attributes, children, element }) => {
  const style = {}
  if (isAlignElement(element)) {
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
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.code) {
    children = <code>{children}</code>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}
const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        isAlignType(format) ? 'align' : 'type'
      )}
      onPointerDown={event => event.preventDefault()}
      onClick={() => toggleBlock(editor, format)}
      data-test-id={`block-button-${format}`}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}
const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onPointerDown={event => event.preventDefault()}
      onClick={() => toggleMark(editor, format)}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}
const isAlignType = format => {
  return TEXT_ALIGN_TYPES.includes(format)
}
const isListType = format => {
  return LIST_TYPES.includes(format)
}
const isAlignElement = element => {
  return 'align' in element
}
const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]
export default DescriptionMaker;