import MarkdownIt from 'markdown-it';
import MarkdownItTaskLists from 'markdown-it-task-lists';
import MarkdownItEmoji from 'markdown-it-emoji';
import MarkdownItFootNote from 'markdown-it-footnote';

const parserConfig = {
	html: true,
	linkify: true,
	typographer: true
};
const md = new MarkdownIt(parserConfig);
md.use(MarkdownItTaskLists, { label: true });
md.use(MarkdownItEmoji);
md.use(MarkdownItFootNote);

export default md;