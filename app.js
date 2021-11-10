const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	console.log('home route')
	// res.send('<h1>This is the Home Page 👋</h1>')
	console.log(__dirname)
	res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (req, res) => {
	console.log('home route')
	// res.send('<h1>This is the Home Page 👋</h1>')
	//console.log(__dirname)
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
	console.log('home route')
	// res.send('<h1>This is the Home Page 👋</h1>')
	//console.log(__dirname)
	res.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (req, res) => {
	console.log('home route')
	// res.send('<h1>This is the Home Page 👋</h1>')
	//console.log(__dirname)
	res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(port, () => {
	console.log(`Listening on port ${port} 🦄 🌈`)
})