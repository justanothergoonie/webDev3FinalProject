let lightboxLinks = document.querySelectorAll('.lightboxify');

let letThereBeLightBox = function (event) {
	event.preventDefault();

	let backDrop = document.createElement('div');
	backDrop.classList.add('lightbox-backdrop');
	backDrop.style.opacity = 0;
	setTimeout(function () {
		backDrop.style.opacity = 1;
		backDrop.stylr.transition = '1s';
	}, 10);
	document.body.appendChild(backDrop);

	let whiteLight = document.createElement('div');
	whiteLight.classList.add('lightbox');
	whiteLight.style.opacity = 0;
	setTimeout(function () {
		whiteLight.style.opacity = 1;
		whiteLight.style.transition = '2s';
	}, 10);
	document.body.appendChild(whiteLight);

	// let largeImage = document.createElement('img');
	// largeImage.setAttribute('src', this.href);

	let yourCart = document.createElement('div');
	yourCart.classList.add('yourCart');

	let yourCartHeader = document.createElement('h1');
	yourCartHeader.innerText = 'Your Cart';

	let items = document.createElement('div');
	items.classList.add('itemContainer');

	let cartItem1 = document.createElement('div');
	cartItem1.classList.add('cartItem');

	let itemName = document.createElement('span');
	itemName.innerText = 'Peruvian Blonde';
	let amountForm = document.createElement('input');
	let amountTotal = document.createElement('span');
	amountTotal.innerText = '$0';
	cartItem1.appendChild(itemName);
	cartItem1.appendChild(amountForm);
	cartItem1.appendChild(amountTotal);

	let cartItem2 = document.createElement('div');
	cartItem2.classList.add('cartItem');

	let itemName2 = document.createElement('span');
	itemName2.innerText = 'Espresso';
	let amountForm2 = document.createElement('input');
	let amountTotal2 = document.createElement('span');
	amountTotal2.innerText = '$0';

	cartItem2.appendChild(itemName2);
	cartItem2.appendChild(amountForm2);
	cartItem2.appendChild(amountTotal2);

	let totalContainer = document.createElement('div');
	totalContainer.classList.add('totalContainer');
	let total = document.createElement('span');
	total.innerText = 'Total';
	let totalAmount = document.createElement('span');
	totalAmount.innerText = '$0';

	let checkOutButton = document.createElement('button');
	checkOutButton.innerText = 'Checkout';
	checkOutButton.classList.add('checkOutButton');

	totalContainer.appendChild(total);
	totalContainer.appendChild(totalAmount);

	items.appendChild(cartItem1);
	items.appendChild(cartItem2);

	whiteLight.appendChild(yourCart);

	yourCart.appendChild(yourCartHeader);

	whiteLight.appendChild(items);
	whiteLight.appendChild(totalContainer);
	whiteLight.appendChild(checkOutButton);
	let closeBtn = document.createElement('img');
	closeBtn.setAttribute('src', './dist/img/Assets/close-button.png');
	closeBtn.classList.add('lightbox-close');
	yourCart.appendChild(closeBtn);

	let beGoneLightBox = function () {
		whiteLight.remove();
		backDrop.remove();
	};
	closeBtn.addEventListener('click', beGoneLightBox);

	backDrop.addEventListener('click', beGoneLightBox);

	window.addEventListener('keyup', function (event) {
		if (event.code === 'Escape') {
			beGoneLightBox();
		}
	});
};

for (var i = 0; i < lightboxLinks.length; i++) {
	//creates a for loop to run through all of lightBoxLinks to apply the letThereBeLightBox function to all of them
	lightboxLinks[i].addEventListener('click', letThereBeLightBox); //when clicked
}
