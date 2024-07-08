import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import "../admin/admincss/AllPost.css"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
</style>

export default function AllPost() {
  const [posts, setPosts] = useState([])

  const allPostCollection = collection(db, 'works')

  const getAllPosts = async () => {
    try {
      const data = await getDocs(allPostCollection)
      const postsArray = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setPosts(postsArray)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async postId => {
    try {
      await deleteDoc(doc(db, 'works', postId))
      setPosts(posts.filter(post => post.id !== postId))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPosts()
  }, [])
  return (
    <>
      <div id='work'></div>
      <section className='work'>
        <div className="cards">
          {posts.map(post => {
            return (
              <div className="card" data-aos="fade-down" key={post.id}>
                <div className="left-text" >
                  <h2>{post.title}</h2>
                  <p>{post.desc}</p>
                  <div className="butt">
                    <a href={post.link}><button>More</button></a>
                    <a><button onClick={() => {deletePost (post.id)} }>Delete</button></a>
                  </div>
                </div>
                <div className="right-img">
                  <img src={post.imageUrl} alt={post.title} />
                </div>
              </div>
            )
          })}

        </div>

      </section>
    </>
  )
}
