import React, {Component} from 'react';
import './Counter.css';
import {connect} from 'react-redux';
import {addCounter, decrementCounter, fetchCounter, incrementCounter, subtractCounter, fetchPost} from "../../Store/action";
import Spinner from "../../Spinner/Spinner";

class Counter extends Component {
    componentDidMount() {
        this.props.fetchCounter();
    }

    render() {

        return (
            <div className='Counter'>
                <h1>{this.props.loading ? <Spinner /> : this.props.ctr}</h1>
                <button onClick={this.props.increaseCounter}>Increase</button>
                <button onClick={this.props.decreaseCounter}>Decrease</button>
                <button onClick={this.props.addCounter}>Increase by 5</button>
                <button onClick={this.props.subtractCounter}>Decrease by 5</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => {
            dispatch(incrementCounter());
            dispatch(fetchPost())
        },
        decreaseCounter: () => {
            dispatch(decrementCounter());
            dispatch(fetchPost())
        },
        addCounter: () => {
            dispatch(addCounter(5));
            dispatch(fetchPost())
        },
        subtractCounter: () => {
            dispatch(subtractCounter(5));
            dispatch(fetchPost())
        },
        fetchCounter: () => dispatch(fetchCounter()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);