class Component {
	$target;
	$state;
	$props;
	constructor($target, $props) {
		this.$target = $target;
		this.$props = $props;
		this.$state = {};
		this.setup();
		this.render();
	}
	setup() {}
	template() {
		return "";
	}
	render() {
		this.$target.innerHTML = this.template();
		this.setEvent();
	}
	setEvent() {}
	setState(newState) {
		this.$state = { ...this.$state, ...newState };
		this.render();
	}
}

export default Component;
