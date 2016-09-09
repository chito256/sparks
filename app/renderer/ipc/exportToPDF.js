const {ipcRenderer} = window.require('electron');
const {getCurrentWindow} = window.require('electron').remote;
const path = window.require('path');
import markdownPDF from 'markdown-pdf';

// Custom CSS for PDF file
const pdfCSS = path.join(__dirname, '..', 'styles', 'themes', 'preview', 'Leo.css');

export default function exportToPDF (appContainer) {
	ipcRenderer.on('sparks::export-to-pdf', (event, arg) => {
		if (!appContainer.getInfo().saved || !appContainer.getInfo().path) {
			alert('Please save the file before exporting to PDF');
		} else {
			const currentFilePath = appContainer.getInfo().path;
			const pdfFileName = path.basename(currentFilePath, '.md') + '.pdf';
			const pdfFilePath = path.join(path.dirname(currentFilePath), pdfFileName);
			let pdfConfig = JSON.parse(getCurrentWindow().userConfig).pdf;
			pdfConfig = {
				...pdfConfig,
				cssPath: pdfCSS
			}
			markdownPDF(pdfConfig).from(currentFilePath).to(pdfFilePath, () => {
				alert(`PDF exported as ${pdfFilePath}`);
			});			
		}
	});
}