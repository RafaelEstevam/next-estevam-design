import Image from 'next/image';
import styled from 'styled-components';
import { style } from '../../styles/settings';

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
    padding: ${style.constAttr * 12}px;
    border: ${style.constAttr}px solid ${style.grayBackground};
    width: 100%;
    border-radius: 2000px;
    background: ${style.black};
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