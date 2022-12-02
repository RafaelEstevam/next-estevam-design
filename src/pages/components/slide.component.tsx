import styled from 'styled-components';
import {ContentItems} from './content.component';

export type SlideProps = {
    items: ContentItems[];
}
const SlideComponent = ({items}:SlideProps) => {

    return (
        <>
            {items?.map((item, key) => (
                <div key={key}>
                    <h2>{item.text}</h2>
                </div>
            ))}
        </>
    )
}

export default SlideComponent