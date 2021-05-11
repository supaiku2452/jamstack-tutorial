import { signIn, signOut, useSession } from "next-auth/client";
import { useCallback } from "react";

export default function Home() {
  const [session, loading] = useSession();
  const handleSignIn = useCallback(() => signIn(), []);
  const handleSignOut = useCallback(() => signOut(), []);
  return (
    <>
      {!session && (
        <>
          サインインしてください。 <br />
          <button onClick={handleSignIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          サインイン完了。 email: {session.user.email} <br />
          <button onClick={handleSignOut}>Sign out</button>
        </>
      )}
    </>
  );
}
