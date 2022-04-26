const tablet = 760;
const tabletPortrait = 970;
const desktop = 1164;

/**
 * How to use breakpoints
 *
 * const MyComponent = styled.div`
 *     color: red,
 *     font-size: 16px;
 *
 *     @media ${device.mobile} {
 *         font-size: 10px
 *     }
 * `;
 */

const device = {
    // <= 760px
    mobile: `(max-width: ${tablet}px)`,
    // >= 761px && <= 1164px
    tablet: `(min-width: (${tablet + 1}px)) and (max-width: ${desktop}px)`,
    // >= 761px && <= 970px
    tabletPortrait: `(min-width: (${
        tablet + 1
    }px)) and (max-width: ${tabletPortrait}px)`,
    // >= 1165px
    desktop: `(min-width: (${desktop + 1}px))`,
    // <= 1164px
    notDesktop: `(max-width: ${desktop}px)`,
};

export default device;
