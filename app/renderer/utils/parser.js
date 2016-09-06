import MarkdownIt from 'markdown-it';

const parserConfig = {
	html: true,
	linkify: true,
	typographer: true
};
const md = new MarkdownIt(parserConfig);

export default md;