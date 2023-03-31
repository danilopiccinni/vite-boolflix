// importo come da prassi un oggetto 'reactive' che posso riempire che degli attributi utlizzabili a livello globale in tutto il mio progetto
import {reactive} from 'vue'
// esporta la variabile a cui si assegna un oggetto reactive che possiamo riempire
export const store = reactive({

    // indice 'acrtive'
    active : 0,

    // array per i risultati riguardanti i film
    resultsSearchFilms : [],

    // array per i risultati riguardanti le serie tv
    resultsSearchTv : [],

    // array per i risultati riguardanti la ricerca mista
    resultsMista : [],

    // proprietà creata per gestire la ricerca inserita dall'utente nel campo di input in pagina
    // collegato tramite v-model
    // che va aggiunto nelle chiamate dopo 'querySearch'
    search : '',

    // parte di stringa da aggiungere in caso le chiamate axios, che precede il valore inserito dall'utente nel campo di input
    // quindi ne seguirà sempre 'search'
    querySearch : '&query=',

    // uri fissa dda usare per le chiamate axios
    Uri :'https://api.themoviedb.org/3',
    
    // parte di stringa da aggiungere in caso le chiamate axios riguardano i film
    searchOfMovie : '/search/movie',

    // parte di stringa da aggiungere in caso le chiamate axios riguardano le serie tv
    searchTv : '/search/tv',
    
    // parte di stringa da aggiungere in caso le chiamate axios riguardano le ricerche multiple
    searchMulti : '/search/multi',
    
    // chiave api
    // parte di stringa da aggiungere obbligatoriamente alla stringa di chiamata axios
    ApiKey : '?api_key=b528c7aa813cfc570c3b175c2311ee69',

    // uri che si deve utilizzare per la gestione delle immagini
    // a questa seguirà la dimensione dell'immagine 'posterImgSize''
    UriImage : 'https://image.tmdb.org/t/p/',

    // parte di stringa da aggiungere in caso le chiamate axios per le immagini
    // viene dopo 'UriImage'
    // e ne segue la parte di stringa riguardante l'immagine del film/serie/ecc
    posterImgSize: 'w342',

    // parte di stringa finale usata per gestire le gli oggetti che non hanno immagine
    // in pratica usata come immagine sostitutiva
    alternativeImage : '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'

})