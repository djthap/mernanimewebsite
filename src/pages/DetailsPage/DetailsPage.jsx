import React, { useEffect, useState } from 'react'

import './DetailsPage.css'
import Carousel from 'react-bootstrap/Carousel'
import { SearchAnime, getTrending } from '../../actions/Anime'
import Banner from '../../Components/Carousel/Banner'
import Loader from '../../Components/Loader/Loader'
import Cards from '../../Components/Cards/Cards'
import { useParams } from 'react-router-dom'
import Anime_Details from '../../Components/Anime_Details/Anime_Details'
import Episodes from '../../Components/Episodes/Episodes'

export default function DetailsPage() {
	const { slug } = useParams()
	const [animeDetails, setAnimeDetails] = useState()

	useEffect(() => {
		SearchAnime(slug).then((data) => {
	
			setAnimeDetails(data.data)
		})
		return () => {}
	}, [])

	return (
		<div className='details_page'>
	<Anime_Details animeDetails={animeDetails}/>
<Episodes animeDetails={animeDetails}/>
		</div>
	)
}
