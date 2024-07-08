import { useState } from 'react'
import { v4 } from 'uuid'
import { db, imgdb } from '../firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import "../admin/admincss/CreatePost.css"

export default function AdminWork() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState(null) 
  const [link, setLink] = useState('')

  const enterWork = collection(db, 'works')

  const createWork = async () => {
    try {
      let imageUrl = ''
      if (img) {
        const imgRef = ref(imgdb, `files/${v4()}`)
        await uploadBytes(imgRef, img)
        imageUrl = await getDownloadURL(imgRef)
      }

      await addDoc(enterWork, {
        title: title,
        desc: desc,
        link: link,
        imageUrl: imageUrl, 
      })

      
      setTitle('')
      setDesc('')
      setImg(null)
      setLink('')

      console.log("Document successfully written!")
    } catch (error) {
      console.log("Xato:", error)
    }
  }

  return (
    <>
      <div className='adminform'>
        <div className='name'>
          <h1>About</h1>
        </div>

        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <br />
        <textarea
          placeholder='Text'
          value={desc}
          onChange={event => setDesc(event.target.value)}
        ></textarea>

        <input
          type='url'
          placeholder='Link'
          value={link}
          onChange={event => setLink(event.target.value)}
        />

        <input
          type='file'
          onChange={event => setImg(event.target.files[0])}
          accept='image/*,.png,.jpg,.gif,.web'
        />
        <br />
        <button className='button' onClick={createWork}>
          Submit
        </button>
      </div>
    </>
  )
}