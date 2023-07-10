// JSON의 parse()와 stringify() 비교
// type 체크
console.log(typeof { 품종: '부사', 생산지: '대구' });
console.log(typeof '{ "품종" : "부사", "생산지" : "대구" }');
console.log(typeof { 품종: '부사', 생산지: '대구' });
console.log(typeof JSON.parse('{ "품종" : "부사", "생산지" : "대구" }'));
console.log(typeof JSON.stringify({ 품종: '부사', 생산지: '대구' }));
// parse 변환
console.log(JSON.parse('{ "품종" : "부사", "생산지" : "대구" }'));
// stringify 변환
console.log(JSON.stringify({ 품종: '부사', 생산지: '대구' }));
// key : value 출력
var fruit = { 품종: '부사', 생산지: '대구' };
console.log('품종=' + fruit.품종 + ' & ' + '생산지=' + fruit.생산지);
console.log('품종=' + fruit['품종'] + ' & ' + '생산지=' + fruit['생산지']);
