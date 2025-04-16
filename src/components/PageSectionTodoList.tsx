import { colord } from 'colord'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import useOnClickOutside from '../hooks/useOnClickOutside'
import SvgStars from '../images/stars.svg'
import { deviceBreakPoints } from '../styles/global-style'
import SectionTextHeader from './SectionTextHeader'

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
  <SectionContainer>
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
              <ColumnTitle>{title}</ColumnTitle>
              <TodoItems>
                {items.map(({ text, description }) => (
                  <TodoItem key={text} text={text} description={description} />
                ))}
              </TodoItems>
            </TodoList>
          ))}
        </TodoLists>
      </TodoListsContainer>
    </TodoListScrollableContainer>
    <GradientLeft />
    <GradientRight />
  </SectionContainer>
)

interface TodoItemProps {
  text: string
  description?: string
}

const TodoItem = ({ text, description }: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <TodoItemContainer
      key={text}
      variants={itemVariants}
      ref={ref}
      onTap={() => setIsOpen((p) => !p)}
      onPointerEnter={() => setIsOpen(true)}
      onPointerLeave={() => setIsOpen(false)}
    >
      <TodoContent>{text}</TodoContent>
      <AnimatePresence>
        {isOpen && description && (
          <TodoDescription
            initial={{ height: 0, opacity: 0, paddingTop: 0 }}
            animate={{ height: 'auto', opacity: 1, paddingTop: 10 }}
            exit={{ height: 0, opacity: 0, paddingTop: 0 }}
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

const SectionContainer = styled.div`
  position: relative;
  background-image: url('${SvgStars}');
  background-repeat: no-repeat;
  background-position-x: center;
  padding: var(--spacing-16) 0;
`

const TodoLists = styled(motion.div)`
  display: flex;
  gap: 60px;
  margin-top: 90px;

  @media ${deviceBreakPoints.mobile} {
    margin-top: 40px;
    gap: 40px;
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

  @media ${deviceBreakPoints.mobile} {
    padding: 0 50px;
  }
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

    &:last-child {
      padding-right: 50px;
    }
  }
`

const ColumnTitle = styled.div`
  display: flex;
  align-items: center;
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
`

const TodoContent = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.textPrimary};
`

const gradientBase = css`
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 120px;
  height: 100%;

  @media ${deviceBreakPoints.mobile} {
    width: 80px;
  }
`

const GradientRight = styled.div`
  ${gradientBase}
  right: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), #000000);
`

const GradientLeft = styled.div`
  ${gradientBase}
  left: 0;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0), #000000);
`

export default PageSectionTodoList
