import styled from 'styled-components';

export interface NetworkItems{
    id: string,
    name: string,
    link: string,
    label: string,
}

export interface MenuItems extends NetworkItems{
    slug: string
}
  
export type MenuProps = {
    menus?: MenuItems[];
    networks?: NetworkItems[];
}

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

const MeunComponent = ({menus}:MenuProps) => {

    return  (
        <>
            <div>
                <Menu>
                    {menus?.map((item, key) => (
                        <ItemMenu key={key}>
                            <ItemLink href={item.link}>{item.label}</ItemLink>
                        </ItemMenu>
                    ))}
                </Menu>
            </div>
        </>
    )
};

export default MeunComponent;