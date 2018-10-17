import React, { Component } from "react";
import logo from "../logo.svg";
import Addform from "./Addform";
import Task from "./Task";

class Tasks extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };
        this.addRecord = this.addRecord.bind(this);
        this.delRecord = this.delRecord.bind(this);
        this.getRecord = this.getRecord.bind(this);
    }
    componentDidMount() {
        axios
            .get("http://l57react.test/tasks")
            .then(tasks => this.setState({ tasks: tasks.data }))
            .catch(err => console.log(err));
    }
    getRecord(e) {
        const tasks = this.state.tasks.map(task => {
            if (e.id === task.id) {
                return e;
            }
            return task;
        });
        this.setState({ tasks });
    }
    addRecord(e) {
        const tasks = [...this.state.tasks, e];
        this.setState({ tasks });
    }
    delRecord(e) {
        this.setState({ tasks: e });
    }
    render() {
        const tasks = this.state.tasks.map(task => (
            <Task
                key={task.id}
                {...task}
                onDel={this.delRecord}
                onUpdate={this.getRecord}
            />
        ));
        return (
            <div className="App mt5">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <Addform addRec={this.addRecord} />
                                <ul className="list-group">
                                    <li className="list-group-item active">
                                        Todo Tasks List
                                    </li>
                                    {tasks}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tasks;
