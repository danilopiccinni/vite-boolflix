import {reactive} from 'vue'

export const store = reactive({

    resultsSearch : [],

    ApiKey : '?api_key=b528c7aa813cfc570c3b175c2311ee69',

    Uri :'https://api.themoviedb.org/3/',

    searchOfMovie : 'search/movie',

    languageIalian : '&language=it-IT',

    querySearch : '&query=',

    search : '',

})