chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		if (window.location.hash === '#automate') {
			console.log('Automating!');
			document.querySelectorAll('.v1Nh3 > a')[0].click();
			for (i = 0; i < 9; i++) {
				document.querySelector('a.coreSpriteRightPaginationArrow').click();
			}
			const automation = setInterval(() => {
			
			let heart = document.querySelectorAll('.glyphsSpriteHeart__outline__24__grey_9');
			if (heart.length === 1) {
				heart = heart[0];
				heart.click();
				}
				document.querySelector('a.coreSpriteRightPaginationArrow').click();
			}, 4000);
			document.querySelector('body > div._2dDPU.vCf6V > button.ckWGn').onclick = () => {
				clearInterval(automation);
			}
		}

	}
	}, 10);
});