export interface News {
  id: number
  title: string
  author: {
    name: string
    avatar: string
  }
  date: string
  content: string
  tags: {
    name: string
    color: string
  }[]
  good: number
  collected: number
  comments: string[]
  view: number
  imgs: string[]
}