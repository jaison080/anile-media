import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import React from 'react'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


const create = () => {
    const [body, setBody] = React.useState('');
    const handleBody = (e) => {
        console.log(e)
        setBody(e)
    }
    return (
  <div className="quill">
    <div className="add-title">Add Blog</div>
      
          <div className='editor>'>
              <QuillNoSSRWrapper modules={create.modules} onChange={handleBody} formats={create.formats} value={body} theme="snow" />
              </div>
              <div className='btn-post'>
          <button className='btn'>POST</button>
          </div>
              </div>);
}
create.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
create.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]
export default create