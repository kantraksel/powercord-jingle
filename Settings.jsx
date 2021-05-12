const { React } = require('powercord/webpack');
const { TextInput, SliderInput } = require('powercord/components/settings');
const { Button } = require('powercord/components');

module.exports = class Settings extends React.PureComponent {
	render() {
		return <>
			<TextInput
				value={ this.props.getSetting('soundURL', '/assets/773745b4ebae9f47e802724ec33b8a3f.mp3') }
				note='This must be URL to an audio file'
				onChange={ val => this.props.updateSetting('soundURL', val) }
			>URL to Jingle file</TextInput>
			<SliderInput
				minValue={ 0 }
				maxValue={ 100 }
				initialValue={ this.props.getSetting('volumej', 40) }
				markers={[ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]}
				onValueChange={ v => this.props.updateSetting('volumej', v) }
			>Jingle volume</SliderInput>
			<Button color={Button.Colors.GREEN} onClick={() => {
	let url = this.props.getSetting('soundURL', '/assets/773745b4ebae9f47e802724ec33b8a3f.mp3');
	let volume = this.props.getSetting('volumej') / 100;
	this.props.mainPlugin.AudioBox.playNew(url, volume);
}}>Test audio</Button>
		</>
	}
}
