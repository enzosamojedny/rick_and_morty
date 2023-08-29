import { connect } from 'react-redux'
import Cards from '../Cards'

function Favorites(favorites) {
    return (
        <div><Cards characters={favorites} /></div>
    )
}
const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, null)(Favorites)