import Image from 'next/image';
import styled from 'styled-components';
export interface PhotoItem {
    id: string
    url: string
}

type PhotoType = {
    photos: PhotoItem[]
}

const PhotoWrapper = styled('div')`
    width: 33.33%;
    position: relative;
`

const Photo = styled(Image)`
    width: 100%;
    height: auto;
    border-radius: 2000px;
    filter: grayscale(1);
`;

const PhotoItem = styled('div')`
    padding: 48px;
    border: 4px solid #333;
    width: 100%;
    border-radius: 2000px;
    background: #121212;
`

const PhotoComponent = ({ photos }: PhotoType) => {
    return (
        <PhotoWrapper>
            {photos?.map((item, key) => (
                <PhotoItem key={key} >
                    <Photo alt={item.id} width={400} height={800} src={item.url} />
                </PhotoItem>
            ))}
        </PhotoWrapper>
    )
}

export default PhotoComponent;