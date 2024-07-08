import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import "../admin/admincss/Work.css"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
</style>

export default function Work() {
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

  useEffect(() => {
    getAllPosts()
  }, [])
  return (
    <>
      <div id='work'></div>
      <section className='work'>
        <div className="name">
          <h1>Work</h1>
        </div>
        <div className="cards">

          {posts.map(post => {
            return (
              <div className="card" data-aos="fade-down">
                <div className="left-text" >
                  <h2>{post.title}</h2>
                  <p>{post.desc}</p>

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
