import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #191b21;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`

export const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
//   white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #F4FFFD;
  fill: #24292e;
  font-family: 'Roboto Mono';
`

export const Title = styled('span')`
  vertical-align: middle;
`

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`

export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}

export const CGContainer = styled('div')`
  border: 3px solid #F4FFFD;
  height: calc(100vh - 2rem);
  margin: 1rem;
  color: #F4FFFD;
  font-family: 'Roboto Mono';
  display: flex;
  flex-direction: column;
`
export const CGConvo = styled('div')`
  flex-grow: 1;
  border-bottom: 1px solid white;
`

export const CGMessage = styled('div')`
  background-color: ${({user}) => user && 'white' };
`
