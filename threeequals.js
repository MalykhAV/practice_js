var good;
var n = [5, 5, 5, 3, 5, 5];
for(var i = 0; i < (n.length - 1); i++) {
    if (n[i] !== n[i+1]) {
        good = n[i];
        break;
    }
}
for(var y = 0; y < n.length; y++) {
    if (n[y] !== good) {
        console.log(n[y] + " is a bad");
    }
}