import axios from 'axios'
import React,{useEffect,useState} from 'react'

const AxiosDemo = () => {

    const [posts,setPosts]=useState([])

    const getPosts=()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url)
        .then(data=>{
           console.log(data.data)
           setPosts(data.data)
        })   
    }

    useEffect(()=>{
        console.log('use effect')
        getPosts()
    },[])

  return (
    <div>
        <h1>AxiosDemo</h1>
        {/**<button onClick={getPosts}>Get Posts</button>**/}

        <table>
            <thead>
                <tr>
                    <td>Id</td> 
                    <td>Title</td>  
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post,index)=>{
                        return(
                            <tr key={index}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AxiosDemo