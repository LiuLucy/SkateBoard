function rotateShow(n, total, idstr) {
	//以字串idstr為id的物件共有totle個，顯示第n個，其餘隱藏
	for(var i=1; i<=total; i++) {
		//將所有的物件隱藏
		var e = document.getElementById(idstr + i);
		e.style.display = "none";
	}
	//顯示第n個物件
	document.getElementById(idstr + n).style.display = "inline";
}
