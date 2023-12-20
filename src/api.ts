const API_KEY = process.env.API_KEY

export const loadGoogleMAP = () => {
	const script = document.createElement('script')

	script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&v=weekly`

	document.body.appendChild(script)
}
