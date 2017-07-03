function tinhtong() {
	//Hiển thị hộp nhập
	var so_a = prompt('Nhập vào ', 'số a: ');
	var so_b = prompt('Nhập vào ', 'số b: ');
	var kq = parseInt(so_a)+parseInt(so_b);
	alert('Kết quả =  '+kq);
	var tieptuc = confirm('Bạn có muốn tiếp tục?');
	if (tieptuc==true) {
		tinhtong();
	}
}