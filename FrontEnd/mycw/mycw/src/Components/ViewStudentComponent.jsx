import React, { Component } from "react";
import StudentSearvice from "../Services/StudentSearvice";

export default class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: {},
    };
  }

  componentDidMount() {
    StudentSearvice.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }

  cancel() {
    this.props.history.push("/students");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">{this.state.student.name}</h3>
          <div className="card-body">
             <div>
                 
             <table className="table table-striped">
            
                  <tbody>
                      <tr>
                      <td><label> NIC</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.student.nic} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Bithday</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.student.birthday} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Address</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.student.address} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Mobile</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.student.mobile} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Telephone</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.student.telephone} </td>
                      </tr>
                  </tbody>
              </table>
             </div>
            <div>
              <button
                className="btn btn-danger"
                onClick={this.cancel.bind(this)}
                style={{ marginTop: "100px" }}
              >
                Back to Students
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
