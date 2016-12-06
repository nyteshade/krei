function showMe()
{
  return new Promise((resolve, reject) => {
    var time = parseInt(Math.random() * 5000);
    setTimeout(() => {resolve(`done in ${time}ms`)}, time);
  });
}

export async function show5()
{
  for (let i = 0; i < 5; i++) {
    let val = await showMe();
    console.log(`i:${i} ${val}`);
  }
  console.log('\nDone!\n');
}
