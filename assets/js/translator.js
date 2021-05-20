
var languageMap = {
	"they": "Dem",
	"eat": "chop",
	"chop": "eat",
	"what": "wetin",
	"surrounding": "domot",
	"surroundings": "domot",
	"don't": "no",
	"go": "going",
	"won": "want",
	"have": "get",
	"are": "dey",
	"Abi?": "Right",
	"Notin": "nothing",
	"Abeg": "plase",
	"Sabi": "Uunderstand",
	"come": "coming",
	"coming": "come",
	"going": "go",
	"dey": "are",
	"gree": "agree",
	"agree": "gree",
	"wahala": "issue",
	"issue": "wahala",
	"want": "won",
	"Gbam": "excatly",
	"dem": "they",
	"wayre": "crazy"
}

function translateInput(sourceLang, input, destinationLang) {

	var availableWords = Object.keys(languageMap);
	var wordsInText = input.split(" ");
	var translatedWords = [];

	wordsInText.forEach(function (word) {
		word = word.toLowerCase();
		translatedWords.push(availableWords.includes(word) ? languageMap[word] : word);
	})

	return translatedWords.join(" ");
}
