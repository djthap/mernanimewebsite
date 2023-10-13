import React, { useEffect, useState } from 'react'

import './DetailsPage.css'
import Carousel from 'react-bootstrap/Carousel'
import { SearchAnime, getTrending } from '../../actions/Anime'
import Banner from '../../Components/Carousel/Banner'
import Loader from '../../Components/Loader/Loader'
import Cards from '../../Components/Cards/Cards'
import { useParams } from 'react-router-dom'

export default function DetailsPage() {
	const { slug } = useParams()
	const [animeDetails, setAnimeDetails] = useState()

	useEffect(() => {
		SearchAnime(slug).then((data) => {
			console.log(data.results[0], data.results[0].title.romaji)
			setAnimeDetails(data.results[0])
		})
		return () => {}
	}, [])

	return (
		<div >
			{animeDetails != undefined ? (
				<div className='backgroud'>
					<h2 className="d-flex text-light justify-content-center">
						{animeDetails.title.english != null
							? animeDetails.title.english
							: animeDetails.title.native}{' '}
						Page
					</h2>
		<img src={animeDetails.image} alt=" Not Found" />
    <p>{animeDetails.description}</p>
    {animeDetails.genres&&animeDetails.genres.map((item,index)=>{
    <h3 key={index}>{item}</h3>
    })}
       <p>{animeDetails.totalEpisodes}</p>
       <p>{animeDetails.status}</p>
       <p>{animeDetails.rating}</p>
       <p>{animeDetails.popularity}</p>
				</div>
			) : (
				<div className="text-align-center">
					<h1>Loading....</h1>
				</div>
			)}
		</div>
	)
}
