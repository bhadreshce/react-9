import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

const Props = (props) => {
    useEffect(() => {
        console.log(props);

    }, [])

    return <>

        {props.name}
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laborum natus saepe consequuntur ullam voluptatibus voluptatum ut placeat optio voluptatem, asperiores voluptas blanditiis accusamus quae nulla ipsum recusandae voluptate vel.</h1>
    </>
}

export default Props


Props.propTypes = {
    name: PropTypes.string


};

Props.defaultProps = {
    name: 'Stranger'
};
