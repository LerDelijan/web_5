import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {load} from "../actions/todo_actions";
import {bindActionCreators} from "redux";

class TaskComponent extends Component {

    componentDidMount = () => {
        this.props.load();
    };

    render() {
        const task = this.props.task !== undefined ? (
            <div className="jumbotron">
                <div>
                    <strong>Name: </strong>
                    {this.props.task.text}
                </div>
                <div>
                    <strong>Is Done: </strong>
                    {this.props.task.done ? 'true' : 'false'}
                </div>
                <div>
                    <strong>Start Time: </strong>
                    {this.props.task.starttime}
                </div>
                <div>
                    <strong>Done Time: </strong>
                    {this.props.task.donetime}
                </div>
            </div>
        ) : (
            <div>Loading...</div>
        );
        return (
            <div>
                {task}
                <Link className='btn btn-dark' role='button' to="/">Back</Link>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    task: state.todos.find(todo => todo.id === parseInt(props.match.params.id))
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {load},
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);
