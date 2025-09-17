import { title } from "@/components/primitives";
import AuthGuard from "@/components/auth-guard";

export default function BlogPage() {
  return (
    <AuthGuard>
      <div>
        <h1 className={title()}>Blog</h1>
      </div>
    </AuthGuard>
  );
}
