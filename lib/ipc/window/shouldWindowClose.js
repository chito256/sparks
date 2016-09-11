export default function shouldWindowClose (appContainer) {
	window.onbeforeunload = (e) => {
		if (!appContainer.getInfo().saved) {
			const confirmCloseWindow = confirm('File is not saved. Close anyway?');
			if (!confirmCloseWindow) {
				e.returnValue = false;
			}
		}
	}
}