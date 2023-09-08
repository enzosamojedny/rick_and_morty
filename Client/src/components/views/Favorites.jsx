import { useSelector, useDispatch } from 'react-redux';
import { filterCards, sortCards, reset } from '../../redux/action';
import Cards from '../Cards';

function Favorites() {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.myFavorites)//! state.favorites

    function sortHandler(event) {
        dispatch(sortCards(event.target.value))
    }
    function filterHandler(event) {
        dispatch(filterCards(event.target.value))
    }
    function resetHandler() {
        dispatch(reset())
    }
    return (
        <div>
            <select name="" id="" placeholder='Gender' onChange={filterHandler}>
                {["Male", "Female", "Unknown", "Genderless"].map((gender) =>
                    <option key={gender} value={gender}>{gender}</option>
                )}
            </select>
            <select name="" id="" placeholder='Sort' onChange={sortHandler}>
                {["Ascendente", "Descendente"].map((order) =>
                    <option key={order} value={order}>{order}</option>
                )}
            </select>
            <button onClick={resetHandler}>RESET</button>
            <Cards characters={favorites} />
        </div>
    );
}
export default Favorites

