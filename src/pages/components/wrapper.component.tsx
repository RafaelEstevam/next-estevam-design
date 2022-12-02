interface WrapperChildren {
    children: React.ReactNode
}

const Wrapper = ({children}:WrapperChildren) => {
    return (
        <div style={{width: '100%'}}>{children}</div>
    )
}

export default Wrapper;