import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Filter from '../components/filter';

const mapStateToProps = (state) => {
    return {
        filter : state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter : (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    }
}

const FilterList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterList
