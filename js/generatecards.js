(function() {
	const roots = Array.prototype.slice.call(document.querySelectorAll('.cards-root'));
	const cardNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
	function createCard(name) {
		const card = document.createElement('div');
		card.className = 'card';
		card.innerText = name;
		return card;
	}
	roots.forEach(function(cards) {
		const cardNodes = cardNames.map(createCard);
		cardNodes.forEach(function(card) {
			cards.appendChild(card);
		})
	})
	
})()