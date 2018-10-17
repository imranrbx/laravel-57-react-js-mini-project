import React, { Component, Fragment } from "react";

class Task extends Component {
    constructor(props) {
        super(props);
        this.delRecord = this.delRecord.bind(this);
        this.editRecord = this.editRecord.bind(this);
        this.updateRecord = this.updateRecord.bind(this);
        this.state = {
            isEdit: false,
        };
    }
    delRecord(e) {
        const id = e.target.getAttribute("datakey");
        axios
            .delete("http://l57react.test/tasks/" + id)
            .then(() => {
                axios
                    .get("http://l57react.test/tasks")
                    .then(tasks => this.props.onDel(tasks.data))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }
    editRecord() {
        this.setState({ isEdit: true });
    }
    updateRecord(e) {
        e.preventDefault();
        const id = e.target.id.value;
        axios
            .put("http://l57react.test/tasks/" + id, {
                title: e.target.task.value,
                isCompleted: "false",
            })
            .then(task => {
                this.props.onUpdate(task.data);
                this.setState({ isEdit: false });
            })
            .catch(err => console.log(err));
    }
    render() {
        const { id, title, isCompleted } = this.props;
        const task =
            this.state.isEdit === true ? (
                <form onSubmit={this.updateRecord} className="mt5">
                    <input type="hidden" name="id" id="id" defaultValue={id} />
                    <div className="form-group">
                        <input
                            type="text"
                            name="task"
                            id="task"
                            defaultValue={title}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Update Task"
                            className="btn btn-primary btn-block"
                        />
                    </div>
                </form>
            ) : (
                <li className="list-group-item" key={id}>
                    {title}- {isCompleted}-
                    <button
                        className="btn btn-primary"
                        onClick={this.editRecord}
                        datakey={id}>
                        Edit
                    </button>
                    -
                    <button
                        className="btn btn-danger"
                        onClick={this.delRecord}
                        datakey={id}>
                        Delete
                    </button>
                </li>
            );
        return <Fragment>{task}</Fragment>;
    }
}

export default Task;
