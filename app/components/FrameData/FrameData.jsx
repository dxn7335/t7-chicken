import React from 'react';
import CharacterSelect from './CharacterSelect';
import FrameDataTableHeader from './FrameDataTableHeader';
import FrameDataTable from './FrameDataTable';
import SearchBar from './../SearchBar/SearchBar';

export default class FrameData extends React.Component {

	constructor(props) {
		super(props);
		this.state = {selectedCharacter: 'alisa'}
		this.renderOptions = this.renderOptions.bind(this);
	}

	handleChange = (event) => {
		this.props.characterSelect(event.target.value);
	}

	renderOptions(options) {
		return Object.keys(options).map((name, key) => {
			return (
				<CharacterSelect
					key={key}
					option={name}
				/>
			)
		})
	}


	renderFrameData() {
		{
			return this.props.moves.map((move, key) => {
				return (
					<FrameDataTable
						key={key}
						notation={move.notation}
						hitLevel={move.hit_level}
						damage={move.damage}
						speed={move.speed}
						onBlock={move.on_block}
						onHit={move.on_hit}
						onCH={move.on_ch}
					/>
				);
			})
		}
	}
		
	render() {
		console.log(this.props);
		const { frameData, selectedCharacter } = this.props;
		let selected = selectedCharacter.selected;
		return(
			<div className="frame-data-container row">
				<div className='small-8 columns centered'>
					<h2>Frame Data</h2>
					<select onChange={this.handleChange}>
						<option defaultValue="Select Character">Select Character</option>
						{this.renderOptions(frameData)}
					</select>
					<SearchBar />
					<table>
					<FrameDataTableHeader />
					{this.renderFrameData()}
					</table>
				</div>
			</div>
		)
	}
 }
