import { useRouter } from "next/router";

const Character = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Character: {pid}</p>;
};

export default Character;
