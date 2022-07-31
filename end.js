const saveCash= document.getElementById('saveCashBtn');
const finalCash= document.getElementById('finalCash')
const mostRecentScore= document.getElementById('mostRecentScore')

finalCash.innerText= mostRecentScore;

saveScore= e =>{
    e.preventDefault()

    const score= {
        score: mostRecentScore,
        name: name.value
    }
}