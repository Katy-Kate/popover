import React from "react";
import { Manager, Reference, Popper } from 'react-popper';

export class Popover extends React.Component {
    state = {
        isOpen: false
    }

    _handleTargetClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    clickebleButton = () => {
        return <span>click</span>
    }

    renderPoper = () => {
        return (
            <Popper placement="right">
                {({ popperProps, ref, style, placement, arrowProps }) => (
                    <div {...popperProps} >
                        <div ref={ref} style={style} data-placement={placement}>
                            <div className="content popper">
                                {this.props.content}
                            </div>

                            <div ref={arrowProps.ref} style={arrowProps.style} />
                        </div>
                    </div>
                )}
            </Popper>
        )
    }

    render() {
        return (
            <div>
                <Manager>
                    <Reference>
                        {({ ref }) => (
                            <button type="button" ref={ref} onClick={this._handleTargetClick}>
                                {this.clickebleButton()}
                            </button>
                        )}
                    </Reference>

                    {this.state.isOpen ? this.renderPoper() : null}

                </Manager>
            </div>)
    }
}