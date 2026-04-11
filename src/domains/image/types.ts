export interface ImageProfile {
    croppedPicture: string,
    id: string,
}

export interface ImageDetail extends ImageProfile {
    author: string,
    camera: string,
    fullPicture: string,
    tags: string,
}
