var c = [' ','ا','ب', 'ج', 'د', 'ه', 'و', 'ز', 'ح', 'ط', 'ي', 'ك', 'ل', 'م', 'ن', 'س', 'ع', 'ف', 'ص', 'ق', 'ر', 'ش', 'ت', 'ث', 'خ', 'ذ', 'ض', 'ظ', 'غ', 'ء', 'أ', 'إ', 'ؤ', 'ئ','ى','ة' ];
var s=0;
function i1() {
  var str=(document.getElementById('i1').value+"");
  document.getElementById('l1').innerHTML=str[0];
  var ns=0;
  if (str.length < 200 && str.length>0)
            {
                var strf ="("+ str[0];
                if (str[0] != ' ') s = 1;
                for (var i = 1; i < str.length-1; i++)
                    if (str[i-1] != ' '&& str[i] == ' '&& str[i+1] != ' ')s++;
                var an =[0];
                for (var i = 1; i < s; i++) an[i] = 0;
                var h = str[0];
                var n =0;
                n= numbertochar(h);
                strf = "(";
                if (n > 0)
                {
                    strf += n + "";
                    an[ns] += n;
                }
                for (var i = 1; i < str.length-1; i++)
                {
                    h = str[i];
                    n = numbertochar(h);
                    if (str[i - 1] != ' ' && str[i] == ' ')
                        strf += ")";
                    if (str[i + 1] != ' ' && str[i] == ' ')
                    {
                        strf += "+(";
                        ns++;
                    }
                    if (str[i] != ' ' && str[i - 1] == ' ')
                    {
                        if (n != -1)
                        {
                            strf += n + "";
                            an[ns] += n;
                        }
                        else strf += "_";
                    }
                    if (str[i - 1] != ' ' && str[i] != ' ')
                    {
                        if (n != -1)
                        {
                            strf += "+" + n;
                            an[ns] += n;
                        }
                        else strf += "+_";
                    }
                }
                h = str[str.length-1];
                n = numbertochar(h);
                if (n > 0)
                {
                    strf += "+"+n;
                    an[ns] += n;
                }
                strf += ")";
                if (ns > 0)
                {
                    strf += "<br>=";
                    var sums = 0;
                    for (var i = 0; i < an.length; i++)
                    {
                        sums += an[i];
                        strf += an[i];
                        if (i != an.length - 1) strf += "+";
                    }
                    strf += "=" + sums + "<br>";
                    an[0] = sums;
                }
                else strf += "=" + an[0] + "<br>";
                var n1 =0, sum= 0;
                n1=an[0];
                while (n1> 0)
                {
                    strf += (n1 % 10);
                    if (n1 > 9) strf += "+";
                    sum+= (n1 % 10);
                    n1=n1-(n1%10);
                    n1= (n1 /10);
                }
                strf += "=" + sum;
                document.getElementById('l1').innerHTML= strf;
            }

}
function numbertochar(h) {
  var n = -1;
            for (var i = 0; i < c.length; i++)
                if (c[i] == h)
                {
                    n = i;
                    break;
                }
            if (n == 35) n = 400;
            else if (n > 28) n = 1;
            else if (n > 18) n = (n - 18) * 100;
            else if (n > 9) n = (n - 9) * 10;
            return n;
}
