let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'puedes', 'awesome'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];

console.log(" Dominios normales:");
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        console.log(p + a + n + ext);
      }
    }
  }
}

console.log("\n💡 Domain hacks:");
for (let n of noun) {
  for (let ext of extensions) {
    if (n.endsWith(ext.replace('.', ''))) {
      let base = n.slice(0, n.length - ext.length + 1);
      console.log(base + ext);
    }
  }
}