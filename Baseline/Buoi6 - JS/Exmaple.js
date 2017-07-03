function Nhapvaothang() {
	var nam = prompt('Nhập năm ','năm = ');
	var thang = prompt('Nhập tháng ','tháng = ');
	var ngay1  = [0,31,28,31,30,31,30,31,31,30,31,30,31];
	var ngay2 = [0,31,29,31,30,31,30,31,31,30,31,30,31];
	if(parseInt(thang)<=0 || parseInt(thang)>12){
		alert('Nhập sai!');
		Nhapvaothang();
	}else{
		if((parseInt(nam)%400==0)|| (parseInt(nam)%4==0 && parseInt(nam)%100!=0)){
			for (var i =1; i< ngay2.length; i++) {
			if(parseInt(thang)==i){
				alert('Tháng '+i+' có '+ngay2[i]+' ngày');
			}
		}
		}else{
			for (var i =1; i< ngay1.length; i++) {
			if(parseInt(thang)==i){
				alert('Tháng '+i+' có '+ngay1[i]+' ngày');
			}
		}
		}
	}
}