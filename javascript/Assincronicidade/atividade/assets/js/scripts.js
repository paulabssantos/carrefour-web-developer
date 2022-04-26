const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const changeBtn = document.getElementById('change-cat');	

const getCats = async () => {
	try{
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;

	}catch(e){
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catImg = document.getElementById('cat');
	catImg.src = await getCats();
}

changeBtn.addEventListener('click',loadImg);

loadImg();