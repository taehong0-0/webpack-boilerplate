import { $, $all } from "./util.js";
import logo from "../images/logo.png";
import hero from "../images/hero-img.png";
import mypage from "../images/account menu.png";
import submit from "../images/submit-button.png";
import prev from "../images/prev.png";
import next from "../images/next.png";
import cancle from "../images/cancle.png";
import minus from "../images/minus.png";
import minusX from "../images/minusX.png";
import plus from "../images/plus.png";

export default class InitImage {
	initMainImage() {
		this.addImg($("#logo"), logo);
		this.addImg($("#mypage"), mypage);
	}
	initBackgroundImage() {
		$("#main").style.backgroundImage = `url(${hero})`;
	}
	initInputbarButtonImage() {
		this.addImg($("#submit"), submit);
		$all(".cancleButton").forEach((el) => this.addImg(el, cancle));
	}
	initCalendarButtonImage() {
		this.addImg($("#prev"), prev);
		this.addImg($("#next"), next);
	}
	initPeopleModalImage() {
		$all(".minus").forEach((el) => {
			this.addImg(el, el.nextElementSibling.textContent !== "0" ? minus : minusX);
		});
		$all(".plus").forEach((el) => this.addImg(el, plus));
	}
	addImg(el, img) {
		let imgEl = document.createElement("img");
		imgEl.src = img;
		el.appendChild(imgEl);
	}
}
