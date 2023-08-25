const API_KEY = "ce65ec21ad9cb3dc7a41a4c1a45629ca";

const request = {
    Trending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    Tv: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    // Movies
    TrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    AdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    AnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    CrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    DocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    DramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    FamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    FantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    HistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    MusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    MysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    ScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    TvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    ThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    WarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    WesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    UpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
    PopularMovies: `/movie/popular?api_key=${API_KEY}`,

    // TV Series
    TrendingTV: `/trending/tv/day?api_key=${API_KEY}&language=en-US`,
    PopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    TopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    OnTheAirTV: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
    // Details
    DetailMovies: `/movie/{movie_id}?api_key=${API_KEY}`,
    // Recommendation
    RecommendationMovies: `/movie/{movie_id}/recommendations?api_key=${API_KEY} `,

    // // Genere
    // Genre: `/genre/movie/list?api_key=${API_KEY}`,

}

export default request;

