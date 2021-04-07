import React,{useEffect,useState} from 'react'
import axios from 'axios'

interface Props {
}
const Login: React.FunctionComponent<Props> = () => {
  const [username, setUsername] = useState('annguyen')
  const [password, setPassword] = useState('annguyen')
  async function getData(){
    const res = await fetch('http://127.0.0.1:8003/login?username='+username+'&password='+password)
    const data = await res.json()
    // console.log(data)
    return data

  };
  useEffect(() => {
    getData();
  });

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const action = '/login';

  const handleParam = setValue => e => setValue(e.target.value)
  const handleSubmit = () => {
    console.log(username);
    console.log(password);
  };

  // const handleSubmit = preventDefault(() => {
  //   router.push({
  //     pathname: action,
  //     query: {q: query},
  //   })
  // })
 
  return (
    <div className="login-content">
      <a href="#" className="close">x</a>
      <h3>Login</h3>
      <form method="post" action="#">
        <div className="row">
          <label htmlFor="username">
            Username:
                    <input type="text" name="username" id="username"   placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required />
          </label>
        </div>

        <div className="row">
          <label htmlFor="password">
            Password:
                    <input type="password" name="password" id="password" required />
          </label>
        </div>
        <div className="row">
          <div className="remember">
            <div>
              <input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
            </div>
            <a href="#">Forget password ?</a>
          </div>
        </div>
        <div className="row">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="row">
        <p>Or via social</p>
        <div className="social-btn-2">
          <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
          <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
        </div>
      </div>
    </div>
  )
}

export default Login