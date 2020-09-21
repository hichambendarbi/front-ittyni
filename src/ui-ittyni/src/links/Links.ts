import styled from "../../../theme/styled-components"
import { Link } from "react-router-dom"

export const HomeLink = styled(Link)`
  text-align: right;
  flex: 1 0;
  padding: 5px 0 0 0;
  text-decoration: none;
`

export const LoginLink = styled(Link)`
  flex: 1 0;
  display: flex;
  padding: 1px 0 0 20px;
  text-decoration: none;
`

export const LoginLinkText = styled('div')`
  padding: 5px 0 0 5px;
`
export const LoginLinkIcon = styled('div')`
  border-left: 1px solid;
  padding-left : 10px;
  margin-bottom: 20px;
`
export const TestLink = styled(Link)`
text-decoration : none;
color : inhert;
`