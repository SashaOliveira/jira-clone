
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Home() {
  return (
    <div className="">
      <Input />
      <Button size="xs" variant="primary">
        Primary 123
      </Button>
      <Button variant="secondary">
        Secondary
      </Button>
      <Button variant="destructive">
        Desctructive
      </Button>
      <Button variant="ghost">
        Ghost
      </Button>
      <Button variant="muted">
        Muted
      </Button>
      <Button variant="outline">
        Outline
      </Button>
      <Button variant="teritary">
        Teritary
      </Button>
    </div>
  )
}
