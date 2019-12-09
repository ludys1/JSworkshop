function histogram (dowolny_string) {
 let hist = {};
 for (let i = 0; i < dowolny_string.length; i++) {
   if (hist[dowolny_string[i]] in hist) {
     hist[dowolny_string[i]] += 1;
   } else {
     hist[dowolny_string[i]] = 1;
   }
 }
 return hist
}

console.log(histogram(“hello world”));
