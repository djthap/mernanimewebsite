import React, { useEffect, useState } from 'react'
import { Player } from 'video-react'

import './StreamingPage.css'
import Carousel from 'react-bootstrap/Carousel'
import {
	SearchAnime,
	getAnimeVideoLink,
	getTrending,
} from '../../actions/Anime'
import Banner from '../../Components/Carousel/Banner'
import Loader from '../../Components/Loader/Loader'
import Cards from '../../Components/Cards/Cards'
import { useParams } from 'react-router-dom'

import ReactPlayer from 'react-player'

function StreamingPage() {
	const { slug } = useParams()
	const [animeLinkDetails, setAnimeLinkDetails] = useState()
	const [animeDetails, setAnimeDetails] = useState()

	useEffect(() => {
		getAnimeVideoLink(slug).then((data) => {
			console.log(data)
			setAnimeLinkDetails(data)
		})

		return () => {}
	}, [])

	return (
		<div className="streaming_page">
			{animeLinkDetails != undefined ? (
				<div className="video_section">
					{' '}
					<h1 className="heading text-center">{slug} </h1>
					<ReactPlayer
						url={animeLinkDetails.sources[2].url}
						controls={true}
						loop={true}
						playing={true}
						height="100%"
						width="100%"
					/>
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	)
}

export default StreamingPage
