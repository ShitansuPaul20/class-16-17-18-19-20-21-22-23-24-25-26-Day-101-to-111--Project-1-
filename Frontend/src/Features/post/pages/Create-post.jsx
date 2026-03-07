import React , {useState , useRef} from 'react'
import '../../Shared/Style/Form.scss'
import '../../Shared/Style/createpost.scss'
import { usePost } from '../Hook/usePost'
import { useNavigate } from 'react-router'


const CreatePost = () => {

    const [Caption, setCaption] = useState("")
    const postImageInputFieldRef = useRef(null)

    const navigate = useNavigate()

    const {Loading , handleCreatePost} = usePost()

    async function handleSubmit(e){
        e.preventDefault()

        const file = postImageInputFieldRef.current.files[0]

        await handleCreatePost(file , Caption)

        navigate("/")

    }

    if(Loading){
        return(
            <main>
                <h1>Creating Post</h1>
            </main>
        )
    }

  return (
    <main className='create-post-page'>
        <div className="form-container">
            <h1>Create post</h1>
            <form onSubmit={handleSubmit}>
                <label className='post-image-label' htmlFor="postImage">Select Image</label>
                <input ref={postImageInputFieldRef} type="file" name='postImage' id='postImage' hidden/>
                <input
                value={Caption} 
                onChange={e=>{setCaption(e.target.value)}}
                type="text" name='caption' id='caption' placeholder='Enter Caption'/>
                <button className='button primary-button'>Create Post</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost