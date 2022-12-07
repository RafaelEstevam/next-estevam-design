import styled from 'styled-components';
import {MenuProps} from './menu.component';

const ItemMenu = styled('li')`
    list-style: none;
`

const ItemLink = styled('a')`
    color: #fff;
`

const Menu = styled('ul')`
    display: flex;
    gap: 16px
`

const MeunComponent = ({networks}:MenuProps) => {
    return (
        <>
            <Menu>
                {networks?.map((item, key) => (
                    <ItemMenu key={key}>
                        <ItemLink href={item.link}>{item.name}</ItemLink>
                    </ItemMenu>
                ))}
            </Menu>
        </>
    ) 
};

export default MeunComponent;