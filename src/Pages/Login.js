import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";

import AuthService from "../services/auth.service";

import { withRouter } from '../common/with-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <>
      <Randomizebackground />
             <Slidebar />

          <Form onSubmit={this.handleLogin} ref={c => {this.form = c;}}  className="login-form position-absolute top-50 start-50 translate-middle z-3">
                <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
                     <span className="w-100 position-absolute top-0 start-0"></span>
                     <span className="h-100 position-absolute top-0 end-0"></span>
                     <span className="w-100 position-absolute bottom-0 end-0"></span>
                     <span className="h-100 position-absolute bottom-0 start-0"></span>
                     Login
                 </h2>
                <div className="inputs mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
                     <input type="text" name="username" value={this.state.username} onChange={this.onChangeUsername} validations={[required]} placeholder="user name"/>
                     <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} validations={[required]} placeholder="put your password"/>
                     <button
                        className="login-btn" disabled={this.state.loading}>
                        {this.state.loading}
                        <span>Login</span>
                     </button>
                 </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
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

export default withRouter(Login);

// function Login(){
//     return(
//         <>
//             <Randomizebackground />
//             <Slidebar />
//             <form action="" className="login-form position-absolute top-50 start-50 translate-middle z-3">
//                 <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
//                     <span className="w-100 position-absolute top-0 start-0"></span>
//                     <span className="h-100 position-absolute top-0 end-0"></span>
//                     <span className="w-100 position-absolute bottom-0 end-0"></span>
//                     <span className="h-100 position-absolute bottom-0 start-0"></span>
//                     Login
//                 </h2>
//                 <div className="inputs mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
//                     <input type="text" name="" id="" placeholder="user name" required/>
//                     <input type="email" name="" id="" placeholder="put your email"required/>
//                     <input type="password" name="" id="" placeholder="put your password"required/>
//                 </div>
//                 <input className="login-btn" type="submit" value="Login"/>
//             </form>
//         </>
//     )
// }

// export default Login;