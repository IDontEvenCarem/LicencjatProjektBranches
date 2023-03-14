function SideAdds (props: {side: 'left'|'right'} = {side: 'left'}) {
    return (
        <div style={{gridArea: props.side}}>
            <h2>adds adds adds</h2>
        </div>
    )
}

export default SideAdds