import styled from 'styled-components';

const CustomWrapper = styled('div')`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
`

interface WrapperChildren {
    children: React.ReactNode
}

const Wrapper = ({children}:WrapperChildren) => {
    return (
        <CustomWrapper>{children}</CustomWrapper>
    )
}

export default Wrapper;