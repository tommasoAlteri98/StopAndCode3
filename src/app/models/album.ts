
  export interface Album{
    userId: number,
    id: number,
    title: string
}

export interface FotoList {
    data:Foto[]
}

export interface Foto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}