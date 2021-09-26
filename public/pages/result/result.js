import { $, $all } from "../../javascripts/util.js";
import Component from "../../core/component.js";
import initImage from "../../javascripts/Init-image.js";
import ResultHeader from "../../components/header/result-header";
import Map from "../../components/map/map.js";
import Rooms from "../../components/rooms/rooms.js";

export default class Result extends Component {
	constructor($target) {
		super($target);
		this.initPage();
		this.initMainImage();
		this.initMainData();
		$("#main").style.backgroundImage = null;
	}
	setup() {
		const checkIn = $("#checkIn-text").textContent;
		const checkOut = $("#checkOut-text").textContent;
		const fee = $("#fee-text").textContent;
		const guest = $("#people-text").textContent;
		this.$props = {
			checkIn: checkIn,
			checkOut: checkOut,
			fee: fee,
			guest: guest,
		};
	}
	template() {
		return `
    <div id="header"></div>
    <div id='main-data'>
      <div id='rooms'></div>
      <div id='map' style="width:50%;height:600px;"></div>
    </div>
    `;
	}
	initPage() {
		new ResultHeader($("#header"), this.$props);
	}
	initMainData() {
		new Map($("#map"));
		new Rooms($("#rooms"), this.$props);
	}
	initMainImage() {
		let image = new initImage();
		image.initMainImage();
	}
}
