// alert("bkjbjbkj");
var c = [ ' ', 'ا', 'ب', 'ج', 'د', 'ه', 'و', 'ز', 'ح', 'ط', 'ي', 'ك', 'ل', 'م', 'ن', 'س', 'ع', 'ف', 'ص', 'ق', 'ر', 'ش', 'ت', 'ث', 'خ', 'ذ', 'ض', 'ظ', 'غ', 'ء', 'أ', 'إ', 'ؤ', 'ئ' ];
function i1() {
  var
  strf=""
  strf2=""
  str=document.getElementById('i2').value;
  if (isnumber(str[0])) {str="("+str;}
  if (isnumber(str[str.length-1])) {str=str+")";}
  for (var i = 0; i < str.length; i++) {
    var h=str[i];
    if (isnumber(h)&&h!='0') {
      var t = 0, iw = i, hf=0;
      var snum =""
      snum= h;
      while (1 + iw < str.length )
      {
        if (isnumber(str[++iw])){t++;}
        else break;
      }
      hf = char_number(h);
      hf = hf + (t * 9);
      if (isnumber(str[i - 1])) strf += "+";
      strf += char_number(h)*(as(t));
      strf2 += numbertochar(hf);
    } else {
      if ( h != '0')
      {
          if (h == ')') strf2 += " ";
          strf += h;
          if ((h != '+') && (h != '(') && (h != ')')) strf2 += h;
      }
    }
  }
  document.getElementById('l3').innerHTML= strf + "\n=" + strf2;
}
function isnumber(h) {
  var n=['1','2','3','4','5','6','7','8','9','0'];
  var b=false;
  for (var i = 0; i < 10; i++) {
    if (h==n[i]) {b=true;}
  }
  return b;
}
function numbertochar(n) {
  if (n > 28) return '|';
  else
  return c[n];
}
function char_number(h) {
  var n = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
  var b = 0;
  for (var i = 0; i < 9; i++)
  {
      if (h == n[i]) b = i + 1;
  }
  return b;
}
function as(t) {
  var r=1;
  for (var i = 0; i < t; i++)
  {
      r=r*10;
  }
  return r;
}
