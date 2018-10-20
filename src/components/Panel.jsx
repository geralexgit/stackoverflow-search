import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ResultsTable from './ResultsTable';
import { connect } from 'react-redux';
import { doTogglePanel } from '../action-creators';

class Panel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			panelIsOpen: false
		};
		this.getPanelState = this.getPanelState.bind(this);
	}
	getPanelState = () => {
		const { panelIsOpen } = this.props.panel;
		this.setState({ panelIsOpen });
	};
	componentDidMount() {
		this.getPanelState();
	}
	componentDidUpdate(prevProps) {
		if (this.props.panel.panelIsOpen !== prevProps.panel.panelIsOpen) {
			this.getPanelState();
		}
	}
	render() {
		const hidePanel = () => this.props.doTogglePanel(false);
		return (
			<div>
				<Modal
					isOpen={this.state.panelIsOpen}
					toggle={() => this.props.doTogglePanel(false)}
					className={this.props.className}
				>
					<ModalHeader toggle={hidePanel}>Modal title</ModalHeader>
					<ModalBody>
						<ResultsTable
							items={this.props.panel.panelItems}
							toggle={hidePanel}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={hidePanel}>
							Close
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { panel } = state;
	return { panel };
};

const mapDispatchToProps = {
	doTogglePanel
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Panel);
