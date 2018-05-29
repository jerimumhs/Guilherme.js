const cabeca = () => {
	const naris = (alvo) => {
		let alvoFinal = encodeURIComponent(alvo)
		fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyADjS6owZ90b4mK38f1GE7L-_vilprqhIQ&cx=017576662512468239146:omuauf_lfve&q=${alvoFinal}&categories=general&format=json`)
	}
	//let attck = [A gente vai pôr a lista aqui né?!]

	//attack.map(naris)
	// minha key da api AIzaSyADjS6owZ90b4mK38f1GE7L-_vilprqhIQ
}