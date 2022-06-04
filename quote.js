const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
		'X-RapidAPI-Key': '228c817096msh9d87a882a7b4f57p11c980jsn4665b5ff35f7'
	}
};


fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response[0].text);
        document.getElementById("quote").innerHTML = `
        ${response[0].text} <br>
        -${response[0].author}
        `;
    })
	.catch(err => console.error(err));

