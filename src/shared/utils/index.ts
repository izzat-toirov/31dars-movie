

export const createImageUrl = (path:string | null) => {
    if(path){
        return `https://image.tmdb.org/t/p/original${path}`
    }
    return "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
}