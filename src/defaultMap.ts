const API_KEY_GOOGLE_MAP = 'AIzaSyC5_L9GsM9N9dUFv4WqWBHg-zkE3kQ_MeE'
// Initialize and add the map
let map
async function initMapDefault(): Promise<void> {
	// The location of Uluru
	const positionCityBishkek = { lat: 42.882004, lng: 74.582748 }

	// Request needed libraries.
	const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
	//@ts-ignore
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

initMapDefault()
