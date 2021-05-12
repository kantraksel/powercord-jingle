const { React } = require('powercord/webpack')
const { Plugin } = require('powercord/entities');
const { waitFor } = require('powercord/util');
const Settings = require('./Settings');
const AudioBox = require('./audiobox');

module.exports = class Jingle extends Plugin {
	constructor() {
		super();
		this.AudioBox = new AudioBox;
	}
	
	async startPlugin () {	
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Startup Jingle',
			render: props => React.createElement(Settings, {
				...props,
				mainPlugin: this
			})
		});


		await waitFor(`.container-3baos1`);
		
		let url = this.settings.get('soundURL', '/assets/773745b4ebae9f47e802724ec33b8a3f.mp3');
		let volume = this.settings.get('volumej') / 100;
		this.AudioBox.prepare(url, volume);
	}

	pluginWillUnload () {
		this.AudioBox.stop();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
}
