// Функция генератор на лету создает итерируемый в будущем нами объект

export function wordsCount(str) {
   const arrWords = sentFilter(str).split(' ')
   arrWords.length < 2
      ? console.log(`В предложении ${arrWords.length} словo !!!`)
      : arrWords.length < 5
         ? console.log(`В предложении ${arrWords.length} слова !!!`)
         : console.log(`В предложении ${arrWords.length} слов !!!`) 
}

export function* getWords(str){
   const words = sentFilter(str) + ' '
   let result = ''
   for(let char of words) {
      if (char !== ' ') {
         result += char
      } else {
         yield result
         result = ''
      }
   }
   // Вариант в старом формате
   // for(let i = 0; i < words.length; i++) {
   //    if (words[i] !== ' ') {
   //       result += words[i]
   //    } else {
   //       yield result
   //       result = ''
   //    }
   // }

   // Интересный вариант
   // const words = sentFilter(str) + ' '
   // let start = 0
   // let current = words.indexOf(' ', start)
   // while (current !== -1) {
   //    yield words.substr(start, current - start)
   //    start = current + 1
   //    current = words.indexOf(' ', start)
   // }
}

const sentFilter = (sentence) => {
   // return sentence.split(' ').filter(words => {
   //    if (words !== '') {
   //       return words
   //    }
   // }).join(' ')
   // Вариант с регулярным выражением
   return sentence.trim().replace(/  +/g, ' ');
}
