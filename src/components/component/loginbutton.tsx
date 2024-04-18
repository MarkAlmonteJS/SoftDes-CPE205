import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginButton() {
 return (
    <Link href="/login">
      <Button variant="secondary">Login</Button>
    </Link>
 );
}
