import React from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {getArticles} from '../../redux/articles/articleReducer'
import {v4 as uuidv4} from 'uuid'

export default function Home() {
    const {articles} = useSelector(state => ({ // donne accés à artocles
        ...state.articleReducer
    }))
    const dispatch = useDispatch()
    // si le tableau est vide tanté un dispatch avec getArticles sinon pas d'essai
    useEffect(() => {
        if(articles.length === 0) {
            dispatch(getArticles());
        }
    }, [])

    return (
        <>
            <h1 className='home-title'>Tous les articles</h1>
            <div className="container-cards">
                {/* Retourner un tableau plein de carte */}
                {articles.map(item => {
                    return (
                        <Card key={uuidv4()}>
                            <h2>{item.title}</h2>
                            <a href="">Lire l'article</a>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}
