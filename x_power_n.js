function pow(x, n) {
	var a = x;
	for(var i = 1; i < n; i++) { // 
		a = a * x;
	}
	return a; // если попробовать сделать ретёрн внутри лупа, значени будет первой итерации и следующий луп не случится
}

var c = pow(3, 3);
console.log(c);