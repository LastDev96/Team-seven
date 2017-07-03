function SignIn(){
	var user = document.getElementsByName('user');
	var pass = document.getElementsByName('pass');
	if(user.value() =='admin' && pass.value() =='123'){
		alert('Sign in susses');
	}else{
		alert('Sign in false');
	}
}