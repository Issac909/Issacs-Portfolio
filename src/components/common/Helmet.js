import React, { Component } from "react";
import {Helmet} from 'react-helmet'

// Changing title in HTML doc to the current title of the page
class EditHeader extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>                    
                </Helmet>
            </React.Fragment>
        )
    }
}


export default EditHeader;