var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 Префиксная форма увеличивает на единицу и присваевает в одном действии.
d = b++; alert(d); // 1 Постфиксная форма возвращает значения до увеличения на ед.
c = (2+ ++a); alert(c); // 5 a равно двум, и префиксная форма итого 2 + 3 = 5
d = (2+ b++); alert(d); // 4 b равно двум плюс постфиксная форма не учитывается в этой строке 2 + 2 = 4
alert(a); // 3  а увеличивалось дважды
alert(b); // 3  b увеличивалось дважды


var a = 2;
var x = 1 + (a *= 2) // x = 1 + (2*2) = 5