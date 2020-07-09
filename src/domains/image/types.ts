export interface ImageProfile {
    cropped_picture: string,
    id: string,
}

export interface ImageDetail extends ImageProfile {
    author: string,
    camera: string,
    full_picture: string,
    tags: string,
}
