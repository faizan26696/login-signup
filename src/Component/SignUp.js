import React, { useState } from 'react';
import CustomInput from '../Atom/CustomInput';
import CustomButton from '../Atom/CustomButton';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userDatas, setUserDatas] = useState([]);

  function handleSignUp() {
    const userInfo = {
      email: email,
      password: password,
      userName: userName,
    };

    // validation

    if (email.includes('@') && password.length >= 4 && password.length <= 8) {
      userDatas.push(userInfo);
    } else {
      alert('Please enter valid detals');
    }
    //  setUserDatas([...userDatas, userInfo])
    localStorage.setItem('userData', JSON.stringify(userDatas));
    // alert(`${userInfo.userName}`)
    console.log(userDatas);
    setEmail('');
    setPassword('');
    setUserName('');
  }

  //JSON.parse(JSON.stringify(obj)) ///deep copy
  //  structuredClone(obj) //deepcopy
  //let arr = [1,2,3,[3,4,5],8,7]
  // let ShalArr = [...arr] //shlaow copy
  //let shallowArray = arr.slice() //shallow
  //object.assign
  // {...obj}
  return (
    <>
      <div className={style.wrap}>
        <h3>SignUP Page</h3>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          className={style.password}
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <CustomInput
          className={style.password}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton onClick={handleSignUp} text="SignUp" />
        <Link to="/"> Login</Link>
      </div>
      {/* {userDatas.map((x) => (
        <p>{x.email}</p>
      ))} */}
    </>
  );
}
