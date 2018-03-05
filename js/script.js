// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW
// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {


            $("button").click(function() {
                var messagetwo = $("input").val();
                var newMessage = aySentence(messagetwo);
                $("#message").text(newMessage);
            });

            function ay(word) {
                var messagetwo = $("input").val();
                var firstLetter = word[0].toLowerCase();
                if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
                    return word + "ay";
                } else {
                    return word.slice(1) + word[0] + "ay";
                }
            }


            var input = $("input").val();

            function aySentence(sentence) {
                var split = sentence.split(" ");
                var sentAy = " ";
                for (var i = 0; i < split.length; i++) {
                    var word = split[i];
                    sentAy = sentAy + " " + ay(word);

                }
                return sentAy;
            }



});
            // Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 




            // Create the sentenceToPigLatin function that takes a sentence as a parameter
            //Loops through all the words in the sentence and transforms each word
            //It should return a transfromed sentance