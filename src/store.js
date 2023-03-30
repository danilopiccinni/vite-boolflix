import {reactive} from 'vue'

export const store = reactive({

    resultsSearch : [],

    search : '',

    Uri :'https://api.themoviedb.org/3',
    
    searchOfMovie : '/search/movie',
    
    searchMulti : '/search/multi',
    
    ApiKey : '?api_key=b528c7aa813cfc570c3b175c2311ee69',

    languageIalian : '&language=it-IT',

    querySearch : '&query=',

    richiestalinguaggio : '&language=en-US&append_to_response=images&include_image_language=en,null',

    UriImage : 'https://image.tmdb.org/t/p/',

    posterImgSize: 'w342',

    alternativeImage : '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'

})