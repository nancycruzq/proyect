(function(){
	const lisElements = document.querySelectorAll('.menu_item--show');
	const list = document.querySelector('.menu-links');
	const menu = document.querySelector('.menu-hamburguer');

	const addClick = ()=>{
		lisElements.forEach(element =>{
			element.addEventListener('click', ()=>{


				let subMenu = element.children[1];
				let height = 0;
				element.classList.toggle('menu_item--active')


				if (subMenu.clientHeight === 0){
					height = subMenu.scrollHeight;
				}

				subMenu.style.height = `${height}px`;

			});

		});
		
	}
	//addClick();

	window.addEventListener('resize',()=>{
		if (window.innerWidth > 800){
			deleteStyleHeight();
			console.log(list.classList)
			if (list.classList.contains('menu-links--show'))
				list.classList.remove('menu-links--show');

		}else{
		addClick();
		}
	})

	if (window.innerWidth <= 800) {
		addClick();
	}	

	menu.addEventListener('click', ()=> list.classList.toggle('menu-links--show'));


})();
