import Ad from './Ad'
import './SideAdds.css'

function SideAdds (props: {side: 'left'|'right'} = {side: 'left'}) {
    return (
        <div className="side-add" style={{gridArea: props.side}}>
            <Ad></Ad>
            <Ad></Ad>
            <Ad></Ad>
        </div>
    )
}

export default SideAdds