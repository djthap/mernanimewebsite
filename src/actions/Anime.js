import axios from 'axios'
import Theme from '../utils/Config'

export async function SearchAnime(data) {
	try {
		const response = await axios.get(
			`${Theme.url}/meta/anilist/info/${data}?provider={gogoanime}`,
			{
				headers: {
					'Content-Type': 'application/json',
				},
				timeout: 5000,
			}
		)
		return response
	} catch (error) {
		try {
			const response2 = await axios.get(
				`${Theme.url2}/meta/anilist/info/${data}?provider={gogoanime}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					timeout: 5000,
				}
			)
			return response2
		} catch (e) {
			return e
		}
	}
}
export async function narutoAnime(data) {
	try {
		const response = await axios.get(`${Theme.url}/meta/anilist/naruto`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return response.data
	} catch (e) {
		return e
	}
}
export async function advanceSeach(data) {
	try {
		const response = await axios.get(
			`${Theme.url}/meta/anilist/advanced-search?query=${data}`,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		return response.data
	} catch (e) {
		return e
	}
}

export async function getinfo(id, dub = false) {
	try {
		const data = await axios.get(
			`${Theme.url}/meta/anilist/info/${id}?provider=gogoanime&dub=${dub}`
		)
		return data.data
	} catch (error) {
		return []
	}
}

export async function getPopulor() {
	try {
		const response = await axios.get(`${Theme.url}/meta/anilist/trending`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return response.data
	} catch (e) {
		return [
			'https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg',
		]
	}
}
export async function getTrending() {
	try {
		const response = await axios.get(`${Theme.url}/meta/anilist/trending`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return response.data
	} catch (e) {
		return [
			'https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg',
		]
	}
}
export async function getChapter(data) {
	data = JSON.stringify(data)
	try {
		const response = await axios.post(
			`${Theme.url}/manga/chapterdata`,
			data,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		return response.data
	} catch (e) {
		return [
			'https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg',
		]
	}
}
export async function getRecentAnime() {
	try {
		const response = await axios.get(
			`${Theme.url}/meta/anilist/recent-episodes`,
			{
				headers: {
					'Content-Type': 'application/json',
					page: 1,
					perPage: 20,
					provider: 'gogoanime',
				},
			}
		)
		return response.data
	} catch (e) {
		return [
			'https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg',
		]
	}
}
export async function getPopular() {
	try {
		const response = await axios.get(`${Theme.url}/meta/anilist/popular`, {
			headers: {
				'Content-Type': 'application/json',
				page: 1,
				perPage: 20,
				provider: 'gogoanime',
			},
		})
		return response.data
	} catch (e) {
		return [
			'https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg',
		]
	}
}
export async function getRandom() {
	try {
		const response = await axios.get(
			`${Theme.url}/meta/anilist/random-anime`,
			{
				headers: {
					'Content-Type': 'application/json',
					page: 1,
					perPage: 20,
					provider: 'gogoanime',
				},
			}
		)
		return response.data
	} catch (e) {
		return [
			'https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg',
		]
	}
}
export async function getAiring() {
	try {
		const response = await axios.get(
			`${Theme.url}/meta/anilist/airing-schedule`,
			{
				headers: {
					'Content-Type': 'application/json',
					page: 1,
					perPage: 20,
					provider: 'gogoanime',
				},
			}
		)
		return response.data
	} catch (e) {
		return [
			'https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg',
		]
	}
}

export async function getMangaData() {
	try {
		const response = await axios.get(
			'https://jujustu.herokuapp.com/mangadata'
		)
		return response.data
	} catch (e) {
		return [{ title: 'No Data Found', manga: [] }]
	}
}
const USER_AGENT =
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
export async function getAnimeVideoLink(id) {
	try {
		const data = await axios.get(
			`${Theme.url2}/anime/gogoanime/watch/${id}`,
			{}
		)
		return data.data
	} catch (error) {
		return []
	}
}
