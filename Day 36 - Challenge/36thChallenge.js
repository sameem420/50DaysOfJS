const transcription = (dna) => {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "G") {
      rna += dna[i].replace("G", "C");
    } else if (dna[i] === "C") {
      rna += dna[i].replace("C", "G");
    } else if (dna[i] === "T") {
      rna += dna[i].replace("T", "A");
    } else {
      rna += dna[i].replace("A", "U");
    }
  }
  return rna;
};

// Solution # 2
const transcription = (dna) => {
  return dna
    .split("")
    .map((dna_strand) => {
      switch (dna_strand) {
        case "G":
          return "C";
        case "C":
          return "G";
        case "T":
          return "A";
        case "A":
          return "U";
        default:
          throw new Error("Invalid input DNA.");
      }
    })
    .join("");
};

console.log(transcription("GCT"));
