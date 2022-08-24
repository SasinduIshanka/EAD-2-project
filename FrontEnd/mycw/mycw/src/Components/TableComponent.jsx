import React from "react";
import StudentSearvice from "../Services/StudentSearvice";

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Student: [],
    };
    this.editStudent = this.editStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.viewStudent = this.viewStudent.bind(this);
  }

  componentDidMount() {
    StudentSearvice.getAllDetails().then((response) => {
      this.setState({ Student: response.data });
    });
  }

  editStudent(id) {
    this.props.history.push(`/add-student/${id}`);
  }
  deleteStudent(id) {
    StudentSearvice.deleteStudent(id).then((res) => {
      this.setState({
        Student: this.state.Student.filter((Student) => Student.id !== id),
      });
    });
  }

  viewStudent(id) {
    this.props.history.push(`/view-student/${id}`);
  }

  render() {
    return (
      <div>
        <br/><br/>
        <h3 className="bg-dark text-white bg-opacity-50">Our Students</h3>
        <table className="table table-striped ">
          <thead>
            <tr className="text-black ">
              <td> Student Id</td>
              <td> Student Name</td>
              <td> NIC</td>
              <td> Actions </td>
            </tr>
          </thead>
          <tbody>
            {this.state.Student.map((std) => (
              <tr key={std.id}>
                <td className="text-black">{std.id}</td>
                <td className="text-info"> {std.name}</td>
                <td className="text-info"> {std.nic}</td>
                <td >
                  <button
                    onClick={() => this.editStudent(std.id)}
                    className="btn btn-info"
                  >
                    Update{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteStudent(std.id)}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewStudent(std.id)}
                    className="btn btn-info"
                  >
                    View{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
