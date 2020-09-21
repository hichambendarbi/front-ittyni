import styled from "../../../theme/styled-components";

export const Container = styled('article')`

    display : flex;
    flex-direction : column;
    
`

/**
 * Article header has :
 * 
 * @avatar pic for the test can be molecule
 * or a organ exploited by the test
 * 
 * @abstract summary for the test specimen reference
 * and other details
 * 
 * 
 */
export const Header = styled('div')`
    margin-bottom : 16px;
    box-shadow: 0 0 4px 2px rgba(189,189,189,1);

    * {
        background : ${({theme})=> theme.color.defaultColor}
    }
`

export const HeaderContainer = styled('div')`
    width: 100%;
    display: flex;
`

export const HeaderAvatar = styled('div')`
    float: left;
    width: 10em;
    height: 10em;
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 20px;
`

export const HeaderAvatarIcon = styled('div')`
    background-color : ${({theme})=>theme.color.defaultColor}
`

// abstract

export const HeaderAbstract = styled('div')`
    flex-grow: 1;
`

export const HeaderTitle = styled('h1')`
    font-weight: 300;
    line-height: 43px;
    white-space: normal;
    color: #212121;
    font-size: 29px;
    margin: 0 0 0 0;
    max-height: 120px;
    font-family: Nunito,"Open Sans",Helvetica,Arial,sans-serif;
`

export const HeaderSubTitle = styled('h2')`
    color: #000000;
    font-size: 1.125rem;
    font-family: Nunito,"Open Sans",Helvetica,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.6;
`

export const HeaderMiddle = styled('h3')`
    color: #006621;
    font-size: 0.875rem;
    font-family: Nunito,"Open Sans",Helvetica,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.57;
    letter-spacing: 0.00714em;
`

export const HeaderFoot = styled('div')`
    display: flex;

    div {
        margin-top : 16px;
        flex-grow : 1;
    }
`
export const HeaderFootAssurance = styled('div')`
    padding : 15px 0;
`

/**
 * article body contain HeadLines of Article : 
 * 
 * @paragraphe paragraphe is the container of article detail
 * 
 * @title title of the Headline
 * 
 * @text text or detail of the headline
 */

export const Paragraphe = styled('div')`
    box-shadow: 0 0 4px 2px rgba(189,189,189,1);
    padding : 10px;
    margin: 5px 0;
    &, * {
       background : ${({theme})=>theme.color.defaultColor}
    }
`

export const ParagraphTitle = styled('h2')`
    padding : .4em;
`
export const ParagraphSubTitle = styled('h3')`
    padding : .4em;
`
export const ParagraphText = styled('p')`
    margin-top : .2em;
`