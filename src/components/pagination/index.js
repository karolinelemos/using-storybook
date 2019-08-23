import React from 'react'
import PropTypes from 'prop-types'
import pagination from '../../utils/pagination'

import Page from './page'

import './pagination.css'

const Pagination = ({ total, activePage = 1, pageLink, onClick }) => (
    <ul className="pagination">
        {pagination({total, activePage }).map((page, index) => (
            <li key={index} className={`pagination-item ${activePage === page ? 'active' : ''}`}>
                <Page 
                    page={page} 
                    pageLink={pageLink.replace('%page%', page)} 
                    onClick={onClick} />
            </li>
        ))}
    </ul>
)

Pagination.defaultProps = {
    pageLink: '',
}

Pagination.propTypes = {
    total: PropTypes.number,
    pageLink: PropTypes.string,
    onClick: PropTypes.func
}

export default Pagination