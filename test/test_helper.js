/**
 * Created by tsassi on 28/05/2016.
 */
import {createRenderer} from 'react-addons-test-utils';

function renderShallow(component) {
    const renderer = createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

export {renderShallow};
