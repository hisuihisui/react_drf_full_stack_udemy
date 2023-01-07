import React, {useState, useEffect} from 'react'

const Timer = () => {

  const [count, setCount] = useState(0)

  const time = () => {
    setCount(prevCount=>prevCount+1)
  }

  // 初回のレンダリングのみ起動
  useEffect(() => {
    // 1秒ごとにtime関数を呼び出す
    const interval = setInterval(time, 1000)

    // コンポーネントが無効になったときに実行
    // Timerが表示されなくなった際にリセットする
    return () => {
      clearInterval(interval)
      console.log("cleared")
    }
  }, [])


  return (
    <div>{count}</div>
  )
}

export default Timer
