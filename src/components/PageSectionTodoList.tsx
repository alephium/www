import styled from 'styled-components'

import SectionTextHeader from './SectionTextHeader'
import SvgStars from '../images/stars.svg'
import { deviceBreakPoints } from '../styles/global-style'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { colord } from 'colord'

export type PageSectionTodoListContentType = {
  title: string
  subtitle: string
  lists: {
    title: string
    items: {
      text: string
      description: string
    }[]
  }[]
}

interface Props {
  content: PageSectionTodoListContentType
}

const PageSectionTodoList = ({ content: { title, subtitle, lists } }: Props) => (
  <BackdropStars>
    <SectionTextHeader id="next" title={title} subtitle={subtitle} bigSubtitle bigText centered />
    <TodoListScrollableContainer>
      <TodoListsContainer>
        <TodoLists
          variants={todoItemsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {lists.map(({ title, items }) => (
            <TodoList key={title}>
              <TodoTitle>{title}</TodoTitle>
              <TodoItems>
                {items.map(({ text, description }) => (
                  <TodoItem key={text} text={text} description={description} />
                ))}
              </TodoItems>
            </TodoList>
          ))}
        </TodoLists>
      </TodoListsContainer>
      <GradientLeft />
      <GradientRight />
    </TodoListScrollableContainer>
  </BackdropStars>
)

interface TodoItemProps {
  text: string
  description?: string
}

const TodoItem = ({ text, description }: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen((p) => !p)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <TodoItemContainer key={text} variants={itemVariants} ref={ref} onClick={handleToggle}>
      <TodoContent>{text}</TodoContent>
      <AnimatePresence>
        {isOpen && description && (
          <TodoDescription
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {description}
          </TodoDescription>
        )}
      </AnimatePresence>
    </TodoItemContainer>
  )
}

const todoItemsContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const BackdropStars = styled.div`
  background-image: url('${SvgStars}');
  background-repeat: no-repeat;
  background-position-x: center;
  margin: var(--spacing-16) 0;
`

const TodoLists = styled(motion.div)`
  display: flex;
  gap: 60px;
  margin-top: 70px;

  @media ${deviceBreakPoints.smallMobile} {
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
`

const TodoListScrollableContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  padding: 0 100px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const TodoListsContainer = styled.div`
  margin: 0 auto;
  position: relative;
`

const TodoList = styled.div`
  display: flex;
  flex-direction: column;

  &:last-child {
    padding-right: 100px;
  }

  @media ${deviceBreakPoints.mobile} {
    align-items: center;
  }
`

const TodoTitle = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 24px;
  margin-bottom: 45px;
  height: 60px;
`

const TodoDescription = styled(motion.div)`
  color: ${({ theme }) => theme.textSecondary};
`

const TodoItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 250px;
`

const TodoLabel = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 4px 6px;
  border-radius: 30px;
  font-size: 11px;
  opacity: 0.3;
`

const TodoItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 15px;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => colord(theme.bgPrimary).lighten(0.15).toHex()};
    ${TodoLabel} {
      opacity: 0.8;
    }
  }

  @media ${deviceBreakPoints.mobile} {
    flex: 1;
    width: auto;
  }
`

const TodoContent = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.textPrimary};
`

const GradientRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 120px;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), #000000);
`

const GradientLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0), #000000);
`

export default PageSectionTodoList
