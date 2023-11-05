import React from 'react'
import "./Anime_Details.css"

function Anime_Details({animeDetails}) {
  return (
<div className='details_card'>
			{animeDetails != undefined ? (
				<div className="  d-flex ">
                    <div className='details_box'>

						<img height={250} width={250} src={animeDetails.image} alt=" Not Found" />
                    </div>
						<div className='details_data'>

					<h5 className="heading  ">
						{animeDetails.title.english != null
							? animeDetails.title.english
							: animeDetails.title.native}
						
					</h5>
					<p>{animeDetails.description}</p>
                    

					<p>TotalEpisodes: {animeDetails.totalEpisodes}</p>
					<p>Status: {animeDetails.status}</p>
					<p>Rating: {animeDetails.rating}</p>
					<p>Popularity: {animeDetails.popularity}</p>
                    <h5>Genres: </h5>
                    <div className='d-flex'>
					{   animeDetails.genres&&
						animeDetails.genres.map((item, index) => {
                            return(

                                <p className='genres_title' key={index}>{item}dsas</p>
                            )
						})}
                        </div>
				</div>
						</div>
			) : (
				<div className="text-align-center">
					<h1>Loading....</h1>
				</div>
			)}
		</div>
  )
}

export default Anime_Details