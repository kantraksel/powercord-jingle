module.exports = class AudioBox {
	constructor() {
		
	}
	
	prepare(url, volume) {
		let audio = this.audio;
		if (!audio) {
			audio = document.createElement("audio");
			audio.autoplay = true;
		}
		this.audio = audio;
		
		audio.volume = volume;
		if (audio.src !== url) audio.src = url;
		else audio.pause();
	}
	
	playNew(url, volume) {
		this.prepare(url, volume);
		this.audio.load();
	}
	
	play() {
		if (this.audio)
			this.audio.play();
	}
	
	pause() {
		if (this.audio)
			this.audio.pause();
	}
	
	stop() {
		if (this.audio) {
			this.audio.pause();
			this.audio.remove();
			delete this.audio;
		}
	}
}
