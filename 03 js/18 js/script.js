const handleSubmit = () => {
  const username = document.getElementById("username").value;
  console.log(username);
  localStorage.setItem('username',username) // available locally
  sessionStorage.setItem('username',username) // available only one window/tab/session
}

const getdetails = () => {
  const new_user = document.getElementById("new_user").value;
  const new_password = document.getElementById("new_password").value;
  localStorage.setItem('new_user',new_user);
  localStorage.setItem('new_password',new_password); 
  sessionStorage.setItem('new_user',new_user);
  sessionStorage.setItem('new_password',new_password); 
}