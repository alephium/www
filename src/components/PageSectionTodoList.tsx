import { FC } from 'react'
import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import TextSnippet from './TextSnippet'
import SvgStars from '../images/stars.svg'
import SvgNight from '../images/night.svg'


type Props = {
  content: {
    title: string
    subtitle: string
    lists: {
      title: string
      items: {
        text: string
        complete: boolean
      }[]
    }[]
  }
}

const PageSectionTodoList = ({ content: { title, subtitle, lists } }: Props) => (
  <Backdrop>
    <PageSectionContainer>
      <SectionTextHeaderStyled title={title} subtitle={subtitle} bigSubtitle bigText />
      <TodoLists>
        {lists.map(({ title, items }, index) => <TodoList key={title}>
          <TodoTitle
            title={title}
            alignRight={index % 2 == 0}
            titleHierarchy="h3"
            bigTitle={false}
          />
          <TodoItems alignRight={index % 2 == 0}>
            {items.map(({ text, complete }, index) => <TodoItem key={text} zIndex={items.length - index}>
              <TodoContent>{ text }</TodoContent>
              { complete && <TodoStateIcon /> }
            </TodoItem>)}
          </TodoItems>
        </TodoList>)}
      </TodoLists>
    </PageSectionContainer>
  </Backdrop>
)

const Backdrop = styled.div`
  background-image: url(${SvgNight}), url(${SvgStars});
  background-repeat: no-repeat;
  background-size: contain;
`

const SectionTextHeaderStyled = styled(SectionTextHeader)`
  text-align: center;
`

const TodoLists = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 70px;
`

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const TodoTitle = styled(TextSnippet)`
  margin-bottom: 45px;
  text-align: ${(props) => props.alignRight ? 'right' : 'left' };
`

const TodoItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: ${(props) => props.alignRight ? 'right' : 'left' };
`

const TodoItem = styled.div`
  width: calc(50% - 30px - 20px);
  padding: 15px 8px 15px 15px;
  background-color: #28253A;
  border-radius: 9px;
  box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);
  display: flex;
  justify-content: space-between;
  z-index: ${(props) => props.zIndex};
`

const TodoStateIcon = styled.div`
  &:after {
    content: 'K';
  }
`

const TodoContent = styled.div`
  padding-right: 21px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
`

export default PageSectionTodoList
