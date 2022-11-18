export const getImgUrl = function (){
    return function(Url){
        import.meta.globEager(Url)
    }
}