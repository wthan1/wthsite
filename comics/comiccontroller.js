const queryString = window.location.search;
let pageIndex = parseInt(window.location.hash.substring(1).split("=")[1]) || 0;

window.addEventListener('hashchange', () => {
	pageIndex = parseInt(window.location.hash.substring(1).split("=")[1]) || 0;

	if (pageIndex >= pages.length) {
		pageIndex = (pages.length - 1);
		window.location.hash = "p=" + pageIndex;
	};
	if (pageIndex < 0) {
		pageIndex = 0;
		window.location.hash = "p=" + pageIndex;
	}
	page.src = pages[pageIndex];

	if (pageIndex == (pages.length - 1)) {
		page.style.cursor = 'default';
	} else {
		page.style.cursor = 'pointer';
	}
});

page.addEventListener('click', () => {
	pageIndex++;
	window.location.hash = "p=" + pageIndex;
});

backbutton.addEventListener('click', () => {
	pageIndex--;
	window.location.hash = "p=" + pageIndex;
});

window.dispatchEvent(new Event('hashchange'));