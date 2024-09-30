const asyncFunc = async (someArg) => someArg;
const syncFunc = (otherArg) => otherArg;


asyncFunc('123')
  .then(res => {console.log(res)})


console.log(syncFunc('zxc'));

(async() => {
  const res = await asyncFunc('563564');
  console.log(res);
})()

const executor = async () => {
  const res = await asyncFunc('GGGGG');
  console.log(res);
  return res;
}
const result =  executor()
console.log(result);