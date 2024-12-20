function arrayConverter(text) {
   return text.trim().toLowerCase().split(/\s+/);
}
function plagiarismDetector(wordsArray1, wordsArray2) {
    const uniqueWords1 = new Set(wordsArray1);
    let commonWords = 0;
    for (let word of wordsArray2) {
        if (uniqueWords1.has(word)) {
            commonWords++;
        }
    }
    console.log(commonWords);
    const similarityPercentage = (commonWords / Math.max(wordsArray1.length, wordsArray2.length)) * 100;
    return similarityPercentage.toFixed(2); 
}
const Assignment1 = "Hello, I am Karuna Mevada From Gujarat.";
const Assignment2 = "I am Masai student";
const Assignment1_Array = arrayConverter(Assignment1);
const Assignment2_Array = arrayConverter(Assignment2);
console.log('Assignments converted into an Array:');
console.log('Assignment1_Array:', Assignment1_Array);
console.log('Assignment2_Array:', Assignment2_Array);
const similarity = plagiarismDetector(Assignment1_Array, Assignment2_Array);
console.log(`Similarity Percentage: ${similarity}%`);

