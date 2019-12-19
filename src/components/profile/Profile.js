import React from 'react';
import CommonRequests from '../../requests/commonRequests';
import Task from '../Task';
import Party from '../listParties/Party'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: null,
      userEmail: null,
      userName: null,
      tasks: null,
      parties: null,
      price: null,
      task_id: null,
    }
  }


  priceChange(event) {
    this.setState({ price: event.target.value });
  }

  componentDidMount() {
    if (localStorage.getItem("user") != null) {
      CommonRequests.getUser(localStorage.getItem("user"))
        .then(res => {
          CommonRequests.getTasksForUser(res.id)
            .then(result => {
              CommonRequests.getUsersParties(res.id)
                .then(p => {
                  this.setState({ userLogin: res.login, userEmail: res.email, userName: res.name, tasks: result, parties: p })
                })
            })
        })
    }
  }

  modify(inputUser, inputName, inputEmail) {
    CommonRequests.addInfo(inputUser, inputName, inputEmail);
  }

  getTasks(arr) {
    if (arr) {
      return arr.map((el) => {
        return <div data-toggle="modal" data-target="#exampleModal">
          <Task onClick={() => this.handleClick(el.id)} party={el.party.name} id={el.id} product={el.product.name} kol={el.kol} money={el.money} status={el.status} measure={el.product.measure}/>
        </div>
      });

    }
  }

  getArr(arr) {
    if (arr) {
      return arr.map((el) => <Party name={el.name} address={el.address} date={el.date} id={el.id} />);
    }
  }

  nameChange(event) {
    this.setState({ userName: event.target.value })
  }

  emailChange(event) {
    this.setState({ userEmail: event.target.value })
  }

  onclick(inputPrice) {
    CommonRequests.addMoneyToTask(this.state.task_id, inputPrice);
  }

  handleClick(inputTask) {
      //('#exampleModal').modal('show');
      // 
      this.setState({task_id: inputTask});
  }


  render() {
    if (this.state != null) {
      var userLogin = this.state.userLogin;
      if (this.state.userName == null) {
        var userName = "Name";
      } else var userName = this.state.userName;
      if (this.state.userEmail == null) {
        var userEmail = "Email";
      } else var userEmail = this.state.userEmail;
      var { tasks } = this.state;
      var { parties } = this.state;
    }
    return (
      <div className="col-12">
        <section id="tabs">
          <div className="row">
            <div className="col-12 ">
              <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">About me</a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">My parties</a>
                  <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">My tasks</a>
                </div>
              </nav>
              <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="container form">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Login</span>
                      </div>
                      <input type="text" class="form-control" placeholder={userLogin} aria-label="Login" aria-describedby="basic-addon1" disabled />
                    </div>

                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Name</span>
                      </div>
                      <input type="text" class="form-control" onChange={this.nameChange.bind(this)} placeholder={userName} aria-label="Name" aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                      </div>
                      <input type="text" class="form-control" onChange={this.emailChange.bind(this)} placeholder={userEmail} aria-label="Email" aria-describedby="basic-addon1" />
                    </div>
                    <button type="submit" onClick={(e) => this.modify(localStorage.getItem("user"), this.state.userName, this.state.userEmail)} className="btn btn-outline-primary">Modify</button>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div>
                    {this.getArr(parties)}
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                  <div className="row">
                    {this.getTasks(tasks)}

                    <div className="modal fade" id="exampleModal" tabindex="1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" show="true"> 
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Is this task ready? {this.props.id}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label for="recipient-name" className="col-form-label">Put the count of money that you spent:</label>
                                <input type="text" id="name" className="form-control" onChange={this.priceChange.bind(this)} placeholder="Money" />
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" id="plus" data-dismiss="modal" onClick={(e) => this.onclick( this.state.price)} className="btn btn-primary">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
