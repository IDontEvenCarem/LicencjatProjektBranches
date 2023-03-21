function SideAdds (props: {side: 'left'|'right'} = {side: 'left'}) {
    return (
        <div className="side-add" style={{gridArea: props.side, position: 'sticky', top: '100px', maxHeight: '80vh'}}>
            <h2>adds adds adds</h2>
        </div>
    )
}

export default SideAdds