alert("salom Mening musiqa qidiruvchi botimga Xush kelibsiz☺️")
async function getData (value) {

	let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "d6c5ee3574msh0748f1500bdfc4bp19a829jsne7d7144d1fdb",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
		}
	})
	let data = await response.json()
	let realData = data.data
	spancha.textContent = data.total
	realData.map( (element) => {
		let songTitle = element.title
		let songLink = element.link
		let songSingerImage = element.artist.picture_big
		let qoshiqrasmi = element.album.cover_big
		let song = element.preview
		let li = document.createElement('li')
		let h3 = document.createElement('h3')
		let a = document.createElement('a')
		let div = document.createElement('div')
		let img = document.createElement('img')
		let audio = document.createElement('audio')
		let source = document.createElement('source')
		h3.textContent = songTitle
		a.textContent = 'Ustiga bosing'
		a.setAttribute('href', songLink)
		img.setAttribute('src', songSingerImage)
		img.setAttribute('alt', 'rasm')
		audio.controls = true
		source.setAttribute('src', song)
		source.setAttribute('type', 'audio/mp3')
		audio.appendChild(source)
		div.appendChild(img)
		div.appendChild(audio)
		li.style.backgroundImage = `url(${qoshiqrasmi})`
		li.appendChild(h3)
		li.appendChild(a)
		li.appendChild(div)
		songList.appendChild(li)
	})
}
btn.onclick = () => {
	songList.innerHTML = null
	if(input.value != "") {
		getData(input.value)
	}
}

