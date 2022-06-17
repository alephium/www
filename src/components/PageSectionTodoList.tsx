import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import TextSnippet from './TextSnippet'
import SvgCheckmark from '../images/complete-check.svg'
import SvgStars from '../images/stars.svg'
import { deviceBreakPoints } from '../styles/global-style'

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

interface Alignment {
  alignRight: boolean
}

const PageSectionTodoList = ({ content: { title, subtitle, lists } }: Props) => (
  <BackdropStars>
    <SectionTextHeader title={title} subtitle={subtitle} bigSubtitle bigText position="sticky" centered />
    <PageSectionContainer>
      <TodoLists>
        {lists.map(({ title, items }, index) => (
          <TodoList key={title}>
            <TodoTitle title={title} alignRight={index % 2 == 0} titleHierarchy="h3" bigTitle={false} />
            <TodoItems alignRight={index % 2 == 0}>
              {items.map(({ text, complete }) => (
                <TodoItem key={text}>
                  <TodoContent complete={complete}>{text}</TodoContent>
                  {complete && <TodoStateIcon />}
                </TodoItem>
              ))}
            </TodoItems>
          </TodoList>
        ))}
      </TodoLists>
    </PageSectionContainer>
  </BackdropStars>
)

const BackdropStars = styled.div`
  background-image: url('${SvgStars}');
  background-repeat: no-repeat;
  background-position-x: center;
`

const TodoLists = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 70px;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
`

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${deviceBreakPoints.mobile} {
    align-items: center;
  }
`

const TodoTitle = styled(TextSnippet)<Alignment>`
  margin-bottom: 45px;
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
`

const TodoItems = styled.div<Alignment>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: ${({ alignRight }) => (alignRight ? 'right' : 'left')};

  @media ${deviceBreakPoints.mobile} {
    justify-content: center;
  }
`

const TodoItem = styled.div`
  height: 119px;
  width: calc(50% - 30px - 20px);
  min-width: 199px;
  padding: 15px 8px 15px 15px;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 9px;
  box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);
  display: flex;
  justify-content: space-between;
`

const TodoStateIcon = styled.div`
  &:after {
    width: 32px;
    height: 32px;
    display: block;
    content: '';
    background-image: url('${SvgCheckmark}');
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const TodoContent = styled.div<{ complete: boolean }>`
  padding-right: 21px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: ${({ theme, complete }) => (complete ? 'var(--color-grey-300)' : theme.textPrimary)};
`

export default PageSectionTodoList
