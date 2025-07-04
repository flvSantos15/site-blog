import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const segments = router.query.user as string[];

  return <div>users: {segments.join("/")}</div>;
}
