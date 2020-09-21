import styled from '../../../theme/styled-components';
export const Badge = styled('span')<{bgcolor? : string}>`
    display: inline-block;
    padding: .25em .4em;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #ffffff;
    background-color: ${({bgcolor})=>bgcolor? bgcolor : '#17a2b8'} !important;
    margin : 5px 0 0 5px;
`