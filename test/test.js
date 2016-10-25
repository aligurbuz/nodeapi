var numbers=[1,2,3,4,5]

var total=numbers.map(function(number)
{
  return number*2;
}).reduce(function(total,number)
{
  return total+number;
})

console.log(total);