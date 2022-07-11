import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
}

/* Set core body defaults */
body {
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
}

/* Remove list styles on ul, ol elements with (or without) a class attribute */
ul,
ol {
    list-style: none;
    margin: 0;
    padding: 0;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
    display: block;
    max-width: 100%;
}

/* Natural flow and rhythm in articles by default */
article > * {
    margin-top: 1em;
}

/* Reset buttons */
button {
    padding: 0;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove focus on divs */
textarea,
select,
input,
button,
div {
    &:focus {
        outline: none;
    }
}
`;

export default ResetStyle;
