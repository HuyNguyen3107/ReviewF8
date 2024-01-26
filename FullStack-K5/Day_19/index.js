for (let i = 1; i <= 10; i++) {
  let line = "";
  for (let j = 1; j <= 10; j++) {
    line += `${i} * ${j} = ${i * j}\t`;
  }
  console.log(line);
}
