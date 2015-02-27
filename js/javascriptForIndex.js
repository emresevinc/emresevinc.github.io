function changeImage(){
	var image1 = document.getElementById('ampul1');
	var image2 = document.getElementById('ampul2');
	if (image1.src.match("bulbon")){
		image1.src = "img/pic_bulboff.gif";
		image2.src = "img/pic_bulboff.gif";
	}else{
		image1.src = "img/pic_bulbon.gif";
		image2.src = "img/pic_bulbon.gif";
	}
}