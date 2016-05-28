/**
 * Created by tsassi on 28/05/2016.
 */
import React from 'react';

class PageHeader extends React.Component {
    render() {
        return (
            <header className='page-header'>
                {this.props.children}
            </header>
        );
    }
}

export default PageHeader
