import React, {Component} from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

class ApiContainer extends Component {
    componentDidMount() {
        SwaggerUi({
            dom_id: '#swaggerContainer',
            url: `/v2/api-docs`,
            presets: [presets.apis],
        });
    }

    render() {
        return (
            <div id="swaggerContainer" />
        );
    }
}

export default ApiContainer;