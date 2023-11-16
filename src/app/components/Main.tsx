"use client"

import { useRef, useState } from 'react'
import { youtube_parser } from '../../utils/Utils';
import axios from 'axios';

const Main = () => {
    const inputUrlRef = useRef<HTMLInputElement>(null); // Specify the type of the ref
    const [urlResult, setUrlResult] = useState<string | null>(null); // Specify the type of the state




    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (inputUrlRef.current) {
            const youtubeID = youtube_parser(inputUrlRef.current.value)

            const options = {
                method: 'get',
                url: 'https://youtube-mp36.p.rapidapi.com/dl',
                headers: {
                    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
                    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
                },
                params: {
                    id: youtubeID
                }
            }

            axios(options)
                .then(res => setUrlResult(res.data.link))
                .catch(err => console.log(err))

            inputUrlRef.current.value = "";

        }
    };

    return (
        <div className='items-center flex justify-center flex-col px-5 h-[100vh] gap-10 bg-gradient-to-b from-slate-900 to-slate-200 '>
            <form
                onSubmit={handleSubmit}
                className='gap-1 flex w-full justify-center items-center'>
                <input
                    ref={inputUrlRef}
                    className='p-5 sm:w-1/2 w-full rounded-xl'
                    placeholder="Pega un enlace URL de video de Youtube..." type="text"
                />
                <button
                    className='bg-black text-white font-bold p-5 rounded-xl w-1/8 lg:w-1/10 btn'
                    type='submit'
                >
                    Búsqueda
                </button>
            </form>


            {urlResult ? <a
                target='_blank'
                rel='noreferrer'
                className='font-bold bg-red-600 p-5 rounded-xl text-white border descargar'
                href={urlResult}
            >
                Descargar MP3
            </a> : ""
            }

        </div>
    )
}

export default Main