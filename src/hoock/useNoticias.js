import responseNoticias from "../mock/noticiasList.json"


export function useNoticias(){
    const noticias = responseNoticias.articles
    const mappedNoticias = noticias?.map(noticia=>({
        id:noticia.source.id,
        autor:noticia.author,
        title:noticia.title,
        description:noticia.description,
        imagen:noticia.urlToImage,
        contenido:noticia.content

    }))
    return{noticias:mappedNoticias}
}