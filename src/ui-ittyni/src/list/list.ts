import styled from "styled-components"
import { device } from "../../../theme"

export const Container = styled('ul')<{itemscope? : boolean, itemtype? : string}>`
    padding : 0;
    list-style-type: none;
    margin : 10px;
`
export const Item = styled.li`
    display: flex;
    background-color: #ffffff;
    margin: 10px;
    padding: 5px;
    min-height : 70px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    * {
        background : #ffffff;
    }

    ${device.mobile`
        margin : 10px 0;
    `}

    ${device.tablet`

    `}
`
export const ItemAbbr = styled('div')`
    flex: 1 0 0;
    background: beige;
    margin: 0 0px 0 0;
    padding: 25px 0;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    h3 {
        background: inherit;
    }
`
export const ItemContent = styled('div')`
    flex : 6 0 0;
    display : flex;
    margin-left: 10px;
    flex-direction : column;
`
export const ItemOptions = styled('div')`
    flex : 2 0 0;
    text-align : right;
    display : flex;
    flex-direction : row;
`
export const ItemContentTitle = styled.div`
    flex: 1 0 0;
    text-transform: uppercase;
`
export const ItemContentDescription = styled.div`
    flex : 1 0 0;
`
export const ItemOptionsData = styled.div`
    flex : 1 0 0;
`
export const ItemOptionsFinance = styled.div`
    flex : 1 0 0;
    text-align : right;
    display : flex;
    flex-direction : column;
    span {
        display: inline-block;
        padding: .25em .4em;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #fff;
        background-color: #17a2b8;

        h3 {
            background: inherit;
        }
    }
`