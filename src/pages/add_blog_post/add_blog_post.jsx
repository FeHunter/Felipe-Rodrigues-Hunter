import { ErrorMessage, Field, Form, Formik } from 'formik'
import style from './add_blog_post.module.css'
import * as yup from 'yup'
import { useEffect, useState } from 'react'

export function AddBlogPostForm () {

    const validate = yup.object().shape({
        title: yup.string().required("O Título não pode esta vazio.")
    })

    // Add links
    const [inputVieoLink, setInputVieoLink] = useState('')
    const [videoLinks, setVideoLinks] = useState([])
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

    return (
        <main className={style.container}>
            <h2>Adicionar um post ao blog</h2>
            <Formik
                initialValues={{ title: '', about: '', textContent: '', images: null, videoLink: null, createdAt: null }}
                validationSchema={validate}
                onSubmit={()=>{
                    createdAt = Date.now()
                }}
            >
                <Form className={style.formContainer}>
                    <div className={style.field}>
                        <label htmlFor="Title">Título do Post</label>
                        <Field className={style.inputField} name="title" id="title" type="text" placeholder="Projeto X" />
                        <ErrorMessage name='title' />
                    </div>
                    <div className={style.field}>
                        <label htmlFor="about">Descrição do Post, breve resumo sobre o post.</label>
                        <Field className={style.inputField} name="about" id="about" type="text" placeholder="Este projeto é sobre..." />
                        <ErrorMessage name='about' />
                    </div>
                    <div className={style.field}>
                        <label htmlFor="textContent">Conteúdo do post, todo o texto.</label>
                        <Field className={style.inputField} name="textContent" id="textContent" type="text" as="textarea" rows="10" placeholder="Este projeto é sobre..." />
                        <ErrorMessage name='textContent' />
                    </div>
                    <div className={style.field}>
                        <label htmlFor="imagesLinks">Imagens do projeto</label>
                        <Field className={style.inputField} name="imagesLinks" id="imagesLinks" type="file" multiple="multiple" />
                        <ErrorMessage name='imagesLinks' />
                    </div>
                    <div className={style.field}>
                        <label htmlFor="VídeoLink">Imagens do projeto</label>
                        <Field className={style.inputField} name="VídeoLink" id="VídeoLink" type="text" placeholder="https://"
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
                        <ErrorMessage name='VídeoLink' />
                    </div>
                    <div className={style.field}>
                        <button type='submit' className={style.addPostBtn}>Salvar Post</button>
                    </div>
                </Form>
            </Formik>
        </main>
    )
}
