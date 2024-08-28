import React from 'react'
import {Stack,Button } from '@mui/material'
import { useState } from 'react'
const App = () => {
const [username,setUsername]=useState('')
const [usermail,setUsermail]=useState('')
const [userpaswrd,setUserpaswrd]=useState('')
const [userphone,setUserphone]=useState(0)
const [useraddrss,setUseraddrss]=useState('')
const [userdob,setUserdob]=useState('')
const [usergender,setUsergender]=useState('')
const [usercourse,setUsercourse]=useState('')
const [isUserpaswrd,setIsUserpaswrd]=useState(false)
const [isUserphone,setIsUserphone]=useState(false)
const [isUsermail,setIsUsermail]=useState(false)
const [isUsername,setIsUsername]=useState(false)
const validData=(inputName)=>{
  console.log(inputName)
  const {name,value}=inputName
  console.log(name,value);
  console.log(!!value.match(/^[A-Z][a-zA-Z\s'-.]*$/ ))
  if(name=="user"){
    setUsername(value)
    !!value.match(/^[A-Z][a-zA-Z\s'-.]*$/ )?setIsUsername(false):setIsUsername(true)
  }
  else if(name=='paswrd'){
    setUserpaswrd(value)
    !!value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ )?setIsUserpaswrd(false):setIsUserpaswrd(true)
  }
 else if(name=="mail"){
    setUsermail(value)
    !!value.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/ )?setIsUsermail(false):setIsUsermail(true)
  }
  else if(name=="phone"){
    setUserphone(value)
    !!value.match(/^[6-9]\d{9}$/ )?setIsUserphone(false):setIsUserphone(true)
  }
  else if(name=="address"){
    setUseraddrss(value)
  }
  else if(name=="dob"){
    setUserdob(value)
  }
  else if(name=="gender"){
    setUsergender(value)
  }
  else if(name=="course"){
    setUsercourse(value)
  }

  
}
// prevent default fnction
const handleForm=(e)=>{
  e.preventDefault()
  console.log(true);
if(username &&  usermail && userpaswrd && userphone && useraddrss &&userdob && usergender && usercourse)
{
  
  alert("form submit succesfull")
}
else{
  alert("please complete form")
}
}
const handleReset=()=>{
  setUsername('') 
  setUsermail('')
  setUserpaswrd('')
  setUserphone('')
  setUseraddrss('')
  setUserdob('')
  setUsergender('')
  setUsercourse('')
  setIsUserpaswrd(false)
  setIsUserphone(false)
  setIsUsermail(false)
  setIsUsername(false)

}
  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center'>
      <div style={{ width: '600px' }} className='bg-light'>
        <h1 style={{ textAlign: 'center' }}>Register Form</h1>
        <form className="border border-dark  p-4 rounded m-5  w-75">
          <div className="col-md-6">
                <label htmlFor="inputname">Username</label>
              <input value={username || ""} name="user" onChange={e=>validData(e.target)} className='mt-2' type="text"  placeholder=" Enter your Username"  id="inputname" size="30"/>
         </div>
         {
        isUsername  &&  
       <div className='mb-3 text-danger fw-bolder'>invalid User name [first letter must be capital letter]</div>
       }
        <div className="col-md-6 mt-2">
          <label htmlFor="inputEmail4" >Email</label>
          <input value={usermail || ""} name="mail" onChange={e=>validData(e.target)} className='mt-2' type="email"  placeholder="example@gmail.com" id="inputEmail4" size="30"/>
        </div>
        {
        isUsermail  &&  
       <div className='mb-3 text-danger fw-bolder'>Invalid Mail</div>
       }
        <div className="col-md-6 mt-2">
          <label htmlFor="inputPassword4" >Password</label>
          <input value={userpaswrd || ""} name='paswrd' onChange={e=>validData(e.target)}  className='mt-2' type="password"  placeholder="Enter your password" id="inputPassword4" size="30"/>
        </div>
        {
        isUserpaswrd  &&  
       <div className='mb-3 text-danger fw-bolder'>Please choose a stronger password .Atleast 8 characters needed. Try mix of capital letters,small letters,numbers and symbols . </div>
       }
        <div className="col-md-6 mt-2">
            <label htmlFor="examplehtmlFormControlTextarea1" >Address</label>
            <textarea value={useraddrss || ""} name='address' type='text' onChange={e=>validData(e.target)} className='mt-2' id="examplehtmlFormControlTextarea1" placeholder="Enter your address" rows="5"></textarea>
          </div>
          <div className="col-md-6 mt-2">
            <label htmlFor="inputPhone" >Phone no</label>
            <input value={userphone || ""} name='phone'  onChange={e=>validData(e.target)} className='mt-2' type="tel"  id="inputPhone" placeholder="phone number" size="30"/>
          </div>
          {
         isUserphone &&  
       <div className='mb-3 text-danger fw-bolder'>Invalid phone number. </div>
       }
          <div className="col-md-4 mt-2">
            <label htmlFor="dateofbirth" >DOB</label>
            <input value={userdob || ""} name='dob' onChange={e=>validData(e.target)} className='mt-2' type="date" id="dateofbirth" />
          </div>
          <div className="col-md-12 mt-2">
            <label htmlFor="gender" >Gender</label>
            <input value='male' checked={usergender ==='male'} onChange={e=>validData(e.target)} className='mt-2 ms-3' type="radio" id="genderm" name="gender"/>Male
            <input value='female' checked={usergender ==='female'} onChange={e=>validData(e.target)} className='mt-2 ms-3' type="radio" id="genderf" name="gender"/>Female
            <input value='other' checked={usergender ==='other'} onChange={e=>validData(e.target)} className='mt-2 ms-3' type="radio" id="gendero" name="gender"/>Other

          </div>
          <div className="col-md-4 mt-2">
          <label htmlFor="inputSubject">Course</label>
          <select value={usercourse || ""} name='course' onChange={e=>validData(e.target)} id="inputSubject" className="mt-2">
            <option></option>
            <option>Biology</option>
            <option>Computer Science</option>
            <option>Commerce</option>
            <option>Humanities</option>
          </select>
        </div>
        <Stack direction="row" spacing={2}>
        <Button disabled={isUserpaswrd||isUserphone||isUsermail||isUsername} onClick={handleForm} style={{width:'30%',height:'30px', textAlign:'center', marginTop:'20px'}} className='bg-dark' variant="contained">Submit</Button>
        <Button onClick={handleReset} style={{width:'30%',height:'30px' ,textAlign:'center' ,marginTop:'20px'}} variant="outlined">Reset</Button>
        </Stack>

        </form>
      </div>
     </div>
  )
}

export default App