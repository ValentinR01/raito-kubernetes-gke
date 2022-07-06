import styled from 'styled-components';
import {Link} from "react-router-dom";
import { themeColorLight } from 'style/vars/colors';


/**
 * @description Modification of React Router Link style
 */

const StyledLink = styled(Link)`
color: ${themeColorLight.cream};
text-decoration:none;
`;

export default StyledLink;