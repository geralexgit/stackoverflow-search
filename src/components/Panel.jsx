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
    console.log(this.props);
    const { panelIsOpen } = this.props.panel;
    this.setState({ panelIsOpen });
  };
  componentDidMount() {
    this.getPanelState();
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.panel.panelIsOpen !== prevProps.panel.panelIsOpen) {
      this.getPanelState();
    }
  }
  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.panelIsOpen}
          toggle={() => this.props.doTogglePanel(false)}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <ResultsTable toggle={() => this.props.doTogglePanel(false)} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
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
