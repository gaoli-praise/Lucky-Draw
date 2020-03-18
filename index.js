window.onload = function() {
    var $ = function(id) {
        return document.getElementById(id);
    }
    var contaner = $('contaner');
    var divs = contaner.getElementsByTagName('div');
    var one = $('one');
    var two = $('two');
    var three = $('three');
    var four = $('four');
    var five = $('five');
    var six = $('six');
    var seven = $('seven');
    var eight = $('eight');
    var night = $('night');
    var k = 0;
    var flag = true;
    five.onclick = function() {
        if (flag) {
            var l = Math.ceil(Math.random() * 10000);
            clearInterval(time);
            var time = setInterval(function() {
                for (var i = 0; i < divs.length; i++) {
                    divs[i].className = '';
                }
                divs[k].className = 'ys';
                switch (k) {
                    case 0:
                    case 1:
                        k++;
                        break;
                    case 2:
                    case 5:
                        k += 3;
                        break;
                    case 8:
                    case 7:
                        k--;
                        break;
                    case 6:
                    case 3:
                        k -= 3;
                        break;
                }
            }, 100)
            flag = false;
            var jc = setTimeout(function() {
                clearInterval(time);
                flag = true;
            }, l)
        }
    }
}