import { $, $all } from "../../javascripts/util.js";
import initImage from "../../javascripts/Init-image.js";
import Component from "../../core/component.js";
import header from "../../components/header/header.js";
import inputbar from "../../components/inputBar/inputBar.js";
export default class main extends Component {
	constructor($target) {
		super($target);
		this.initPage();
		this.initMainImage();
	}
	template() {
		return `
    <div id="main-header"></div>
    <div id='inputbar'></div>
    `;
	}
	initPage() {
		new header($("#main-header"));
		new inputbar($("#inputbar"));
	}
	initMainImage() {
		let image = new initImage();
		image.initBackgroundImage();
	}
}
