import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import style from './user_page.module.css'
import { supabase } from '../../services/supabase/supabaseClient'
import { useEffect, useState } from 'react'

export function UserPage () {

    const [user, setUser] = useState(null)
    useEffect(()=>{
        const getUser = supabase.auth.getUser()
        getUser.then(res => {
            setUser(res.data.user)
        })
    },[])

    const Login = async (values) => {
        try {
            // verifica se email está autorizado
            const { data: allowed } = await supabase.from('Allowed_User').select('email').eq('email', values.email).single()
            if (!allowed || allowed.length === 0) {
                alert("Email não autorizado")
                return
            }

            const { data, error } = await supabase.auth.signInWithPassword(values)
            if (error) {
                alert("Erro ao realizar login: " + error.message)
                return
            }

        } catch (err) {
            console.error(err)
            alert("Erro inesperado")
        } finally {
            window.location.reload()
        }
    }

    const SignOut = async () => {
        supabase.auth.signOut()
        window.location.reload()
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Email inválido').required('Obrigatório'),
        password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Obrigatório')
    })


    return (
        <main>
            {!user &&
                <article>
                    <h2>Sign In</h2>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            Login(values)
                        }}
                    >
                    <Form>
                        <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" id="email" placeholder="email" />
                        <ErrorMessage name="email" component="p" />
                        </div>

                        <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" id="password" placeholder="password" />
                        <ErrorMessage name="password" component="p" />
                        </div>

                        <div>
                        <button type="submit">Sign In</button>
                        </div>
                    </Form>
                    </Formik>
                </article>
            }
            {user &&
                <article>
                    <button onClick={()=>{SignOut()}}>Sign Out</button>
                </article>
            }
        </main>
    )
}