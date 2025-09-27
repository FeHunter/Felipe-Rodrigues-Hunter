import { ErrorMessage, Field, Form, Formik } from 'formik'
import style from './add_blog_post.module.css'
import * as yup from 'yup'
import { useEffect, useState } from 'react'

// supabase
import { supabase } from '../../services/supabase/supabaseClient'
import { useParams } from 'react-router-dom'

export function AddBlogPostForm () {

    // load
    const [loading, setLoading] = useState(false)

    // Form
    const [initialValues, setInitialValues] = useState(
        { title: '', about: '', text_content: '', images: null, video_link: [], created_at: null}
    )
    const validate = yup.object().shape({
        title: yup.string().required("O Título não pode esta vazio."),
        about: yup.string().required("Descrição do post é necessária."),
        text_content: yup.string().required("Escreva sobre o projeto."),
    })

    // check to load and edit
    const { id } = useParams()
    useEffect(()=>{
        if (id) LoadFormToEdit()
    },[])
    const LoadFormToEdit = async () => {
        setLoading(true)
        try{
            const { data: post_edit } = await supabase.from('Blog_Post').select('*').eq('id', id).single()
            if (post_edit) {
                // get links
                const { data: video_links } = await supabase.from('Blog_video_links').select('*').eq('post_id', id)
                let links = []
                for (const link of video_links){
                    links.push(link.video_link)
                }
                setVideoLinks(links)
                setInitialValues(post_edit)
            }
        }finally{
            setLoading(false)
        }
    }

    // Images
    const [images, setImages] = useState(null)

    // Add links
    const [inputVieoLink, setInputVieoLink] = useState('')
    const [videoLinks, setVideoLinks] = useState(initialValues.video_link)
    const AddVideoLink = () => {
        // verify is link is already on the list, validate is string is not empty
        if (videoLinks.indexOf(inputVieoLink) === -1 && inputVieoLink.length > 0){
            let upt = [...videoLinks]
            upt.push(inputVieoLink)
            setVideoLinks(upt)
            setInputVieoLink('')
        }else {
            alert("Link já adicionado ou vazia.")
        }
    }
    const RemoveVideoLink = (link) => {
        const index = videoLinks.indexOf(link)
        let upt = [...videoLinks]
        upt.splice(index, 1)
        setVideoLinks(upt)
    }

    // Save Post - Data base
    const AddPostToDataBase = async (values) => {
        // verify if it is update or insert
        if (id) {
            const {error: erro_update} = await supabase.from('Blog_Post').update([values]).eq('id', id)
            if (erro_update) alert("Erro ao atualizar post.")
            else alert("Post atualizado com sucesso!")
        }else {
            // add post texts
            const post_to_upload = { 'title': values.title, 'text_content': values.text_content, 'about': values.about, 'created_at': values.created_at }
            const { data: post, error: post_error } = await supabase.from('Blog_Post').insert([post_to_upload]).select().single()
            if (post_error) console.log(post_error)
            if (post) {
                console.log(post)
                // add images links
                if (images){
                    for (const img of images){
                        const to_upload = { 'post_id': post.id, 'img_link': img }
                        const {error: img_link_error} = await supabase.from('Blog_Images').insert([to_upload])
                        if (img_link_error) console.log(`Erro ao salvar image: ${img}, mais detalhes: ${img_link_error.message}`)
                    }
                }
                // add video links
                if (videoLinks.length > 0){
                    for (const link of videoLinks){
                        const to_upload = { 'post_id': post.id, 'video_link': link }
                        const {error: video_link_error} = await supabase.from('Blog_video_links').insert([to_upload])
                        if (video_link_error) console.log(`Erro ao salvar link: ${link}, mais detalhes: ${video_link_error.message}`)
                    }
                }
            }
        }
    }

    return (
        <main className={style.container}>
            <h2>Adicionar um post ao blog</h2>
            {!loading &&
                <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={(values)=>{
                        values.created_at = Date.now()
                        AddPostToDataBase(values)
                    }}
                >
                    <Form className={style.formContainer}>
                        <div className={style.field}>
                            <label htmlFor="Title">Título do Post</label>
                            <Field className={style.inputField} name="title" id="title" type="text" placeholder="Projeto X" />
                            <ErrorMessage name='title' component="p" className={style.errorMessage} />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="about">Descrição do Post, breve resumo sobre o post.</label>
                            <Field className={style.inputField} name="about" id="about" type="text" placeholder="Este projeto é sobre..." />
                            <ErrorMessage name='about' component="p" className={style.errorMessage} />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="text_content">Conteúdo do post, todo o texto.</label>
                            <Field className={style.inputField} name="text_content" id="text_content" type="text" as="textarea" rows="10" placeholder="Este projeto é sobre..." />
                            <ErrorMessage name='text_content' component="p" className={style.errorMessage} />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="imagesLinks">Imagens do projeto</label>
                            <Field className={style.inputField} name="imagesLinks" id="imagesLinks" type="file" multiple="multiple"
                                value={images} onChange={(e)=>{
                                    const allFiles = Array.from(e.target.files)
                                    setImages(allFiles)
                                }}/>
                            <ErrorMessage name='imagesLinks' component="p" className={style.errorMessage} />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="video_link">Links para vídeos *Youtube</label>
                            <Field className={style.inputField} name="video_link" id="video_link" type="text" placeholder="https://"
                                value={inputVieoLink} onChange={(e)=>{setInputVieoLink(e.target.value)}} />
                            <nav className={style.videoLinksContainer}>
                                {videoLinks.length > 0 && videoLinks.map((link, i) => {
                                    return (
                                        <div key={`video_link_${i}`} className={style.vieoLinkField}>
                                            <li> {link} </li>
                                            <button className={style.videoLinkBtn} type='button' onClick={()=>{RemoveVideoLink(link)}}><i class="fa-solid fa-delete-left"></i></button>
                                        </div>
                                    )
                                })}
                            </nav>
                            <button type='button' onClick={()=>{AddVideoLink()}}>Adicionar Link</button>
                            <ErrorMessage name='video_link' />
                        </div>
                        <div className={style.field}>
                            <button type='submit' className={style.addPostBtn}>Salvar Post</button>
                        </div>
                    </Form>
                </Formik>
            }
        </main>
    )
}
