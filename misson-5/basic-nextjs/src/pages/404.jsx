import { useRouter } from 'next/router'

const ErorrPage = () => {

  const router = useRouter();

  setTimeout(() => {
    router.push("/")
  }, 3000);

  return (
    <div>
        <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" width="100%"/>
    </div>
  )
}

export default ErorrPage