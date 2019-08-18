import React from 'react';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';

const Location = ({ city }) => (
    <Typography variant="h5" >
        {city}
    </Typography>
);

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;
