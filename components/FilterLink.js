/**
 * Created by rahul on 29/10/16.
 */
import React from 'react';
import {Link} from 'react-router'

const FilterLink = ({
    filter, children
}) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </Link>
)

export default FilterLink;