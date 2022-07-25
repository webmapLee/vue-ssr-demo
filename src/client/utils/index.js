export const isSSR = typeof window === 'undefined'  

export const fetchData = async ()=>{
  const data = await {
    name:'wangwu',
    sex:'female',
  }
  return data
}