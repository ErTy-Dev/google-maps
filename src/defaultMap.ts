// const API_KEY_GOOGLE_MAP = 'AIzaSyC5_L9GsM9N9dUFv4WqWBHg-zkE3kQ_MeE'
import { loadGoogleMAP } from './api'
import './app.css'

loadGoogleMAP()

let map
async function initMapDefault(): Promise<void> {
	const positionCityBishkek = { lat: 42.882004, lng: 74.582748 }

	const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
	const { Marker } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary

	map = new Map(document.getElementById('map') as HTMLElement, {
		zoom: 12,
		center: positionCityBishkek,
		mapId: 'DEMO_MAP_ID',
	})

	const marker = new Marker({
		map: map,
		position: positionCityBishkek,
		title: 'Bishkek location',
	})
}

window.initMap = initMapDefault
