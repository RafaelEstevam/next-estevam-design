import Image from 'next/image';

export interface PhotoItem{
    id: string
    url: string
}

type PhotoType = {
    photos: PhotoItem[]
}

const PhotoComponent = ({photos}:PhotoType) => {
    return (
        <div>
            {photos?.map((item, key) => (
                <Image alt={item.id} width={100} height={100} key={key} src={item.url} />
            ))}
        </div>
    )
}

export default PhotoComponent;