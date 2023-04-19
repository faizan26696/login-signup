import React, { useState, useEffect } from 'react';
import style from './Login.module.css';
import CustomInput from '../Atom/CustomInput';
import CustomButton from '../Atom/CustomButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('userData'));
   
    setUserList(data);
  }, []);
  console.log(userList);
  function handleLogin() {
    if (email === '' || password === '') {
      alert('FIll the form first');
    } else if (userList !== undefined) {
      const userFind = userList.find(
        (x) => x.email === email && x.password === password
      );
      alert(`${userFind.userName} you are successfully  login`);
      nav('/home');
    } else {
      alert('please register first');
    }
  }
  return (
    <>
      <div className={style.wrap}>
        <h3>Login Page</h3>
        <p>One more thing add recoil also abd make a hook so to just create protected route it was left guys</p>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onChange={(e) => {...obj,obj.setEmail(e.target.value)}}
        />
        <CustomInput
          className={style.password}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton onClick={handleLogin} text="Login" />
        <Link to="/signup"> SignUp</Link>
      </div>
    </>
  );
}
