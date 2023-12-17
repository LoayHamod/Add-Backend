import Randomizebackground from "../components/Randomizebackground"
import Slidebar from "../components/Slidebar"

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };


export default class Signupadmin extends Component {
    constructor(props) {
      super(props);
      this.handleRegister = this.handleRegister.bind(this);
      this.onChangeFirstname = this.onChangeFirstname.bind(this);
      this.onChangeSecondname = this.onChangeSecondname.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  
      this.state = {
        firstname: "",
        secondname: "",
        username: "",
        email: "",
        password: "",
        role: "admin",
        successful: false,
        message: ""
      };
    }
  
    onChangeFirstname(e) {
      this.setState({
        firstname: e.target.value
      });
    }

    onChangeSecondname(e) {
      this.setState({
        secondname: e.target.value
      });
    }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  
    handleRegister(e) {
      e.preventDefault();
  
      this.setState({
        message: "",
        successful: false
      });
  
      this.form.validateAll();
  
      if (this.checkBtn.context._errors.length === 0) {
        AuthService.register(
          this.state.firstname,
          this.state.secondname.
          this.state.username,
          this.state.email,
          this.state.password,
          this.state.role
        ).then(
          response => {
            this.setState({
              message: response.data.message,
              successful: true
            });
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              successful: false,
              message: resMessage
            });
          }
        );
      }
    }

    render() {
        return (
          <>
             <Randomizebackground />
             <Slidebar /> 

              <Form onSubmit={this.handleRegister} ref={c => { this.form = c;}} className="signup-form position-absolute top-50 start-50 translate-middle z-3">
                {!this.state.successful && (
                    <>
                        <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
                            <span className="w-100 position-absolute top-0 start-0"></span>
                            <span className="h-100 position-absolute top-0 end-0"></span>
                            <span className="w-100 position-absolute bottom-0 end-0"></span>
                            <span className="h-100 position-absolute bottom-0 start-0"></span>
                            Sign up
                        </h2>
                        <div className="inputs mb-5 mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
                                <input type="text" value={this.state.firstname} onChange={this.onChangeFirstname} validations={[required]} placeholder="First Name" id=""  />
                                <input type="text" value={this.state.secondname} onChange={this.onChangeSecondname} validations={[required]} placeholder="Second Name" id=""  />
                                <input type="text" name="username" value={this.state.username} onChange={this.onChangeUsername} validations={[required]} id="first" placeholder="user-name"  />
                                <input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} validations={[required]} placeholder="put  your email" id="email" />
                                <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} validations={[required]} placeholder="put your password" id="pass1" />
                                {/* <input className="" type="submit" value="signup" /> */}
                            </div> 
                    </>
                )}
    
                {this.state.message && (
                  <div className="form-group">
                    <div
                      className={
                        this.state.successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
          </>
        );
      }
    }



// function Signupadmin(){
//     return(
//         <>
//             <Randomizebackground />
//             <Slidebar />    
//             <form className="signup-form position-absolute top-50 start-50 translate-middle z-3" action="">
//                 <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
//                     <span className="w-100 position-absolute top-0 start-0"></span>
//                     <span className="h-100 position-absolute top-0 end-0"></span>
//                     <span className="w-100 position-absolute bottom-0 end-0"></span>
//                     <span className="h-100 position-absolute bottom-0 start-0"></span>
//                     Sign up
//                 </h2>
//                 <div className="inputs mb-5 mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
//                     <input type="text" name="" id="first" placeholder="user-name" required  />
//                     <input type="number" placeholder="put your-number" id="num3" required/>
//                     <input type="email" placeholder="put  your email"required id="email"/>
//                     <input type="password" placeholder="put your password" id="pass1" required/>
//                     <input type="password" placeholder="regist your password" id="pass2" required/>
//                     <label for="img">add your image</label>
//                     <input type='file' src="" alt="" placeholder="add your img" id="img"/>
//                     <input className="" type="submit" value="signup"/>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default Signupadmin;