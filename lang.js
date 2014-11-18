function supports_html5_storage() {
	try {
		return 'sessionStorage' in window && window['sessionStorage'] !== null;
	} catch (e) {
		return false;
	}
}

function setLang(l)
{
	document.body.className=l;
	if (supports_html5_storage()) {
		sessionStorage.setItem('lang', l);
	}
}

function get_default_lang()
{
	for (i in navigator.languages) {
		for (j in ['/en/', '/de/', '/fr/']) {
			if (i.search(j) != -1) {
				return j;
			}
		}
	}

	return 'en';
}
function loadLang()
{
	l = 'null';
	if (supports_html5_storage()) {
		l = sessionStorage.getItem('lang');
	}

	if (l == 'null') l = get_default_lang();
	setLang(l);
}
