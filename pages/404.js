import { useRouter } from "next/router"

const Error = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push('/')
  }, 3000);

  return <div className="error">404</div>
}

export default Error