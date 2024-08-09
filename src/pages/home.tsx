import { useLoaderData } from "react-router-dom";
import PrimaryStackedLayout from "../layouts/primaryStackedLayout";

export default function HomePage() {
  // following along with this discussion
  // https://github.com/remix-run/react-router/discussions/9792
  const { data: parks } = useLoaderData() as any;

  return (
    <PrimaryStackedLayout>
      {
        parks.map((park: any) => <p key={park.id}>{park.name}</p>)
      }
    </PrimaryStackedLayout>
  )
}