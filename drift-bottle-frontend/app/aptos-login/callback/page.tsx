"use client"

import { useKeylessAccounts } from "@/app/core/useKeylessAccounts";
import { Progress } from "@nextui-org/progress";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";


function AptosLoginPage() {
  const isLoading = useRef(false);
  const router = useRouter()
  const switchKeylessAccount = useKeylessAccounts(
    (state) => state.switchKeylessAccount
  );
  const fragmentParams = new URLSearchParams(window.location.hash.substring(1));
  const idToken = fragmentParams.get("id_token");
  // const isBrowser = typeof window !== 'undefined';
  useEffect(() => {
    // This is a workaround to prevent firing twice due to strict mode
    if (isLoading.current) return;
    isLoading.current = true;

    async function deriveAccount(idToken: string) {
      try {
        await switchKeylessAccount(idToken);
        router.replace('/bottles')
      } catch (error) {
        console.log('[ error ] >', error)
        router.replace('/')
      }
    }

    if (idToken) {
      deriveAccount(idToken);
    }
  }, [idToken, isLoading, switchKeylessAccount]);

  return <div className="w-full min-h-[50vw] h-screen flex flex-col justify-center items-center">
    <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      color="success"
      className="max-w-md"
    />
    <h2 className="text-center">Connecting...</h2>
  </div>
  // if (isBrowser) {
  //   const fragmentParams = new URLSearchParams(window.location.hash.substring(1));
  //   const idToken = fragmentParams.get("id_token");
  //   // google account info 
  //   const user: any = jwtDecode<{ nonce: string }>(idToken as string)
  //   user.idToken = idToken
  //   const jwtNonce = user.nonce
  //   const ephemeralKeyPair = EphemeralKeyPair.generate();
  //   storeEphemeralKeyPair(jwtNonce, ephemeralKeyPair);
  //   storeUser(user)
  //   redirect("/bottles")
  //   // const ephemeralKeyPair = getLocalEphemeralKeyPair(jwtNonce);
  // } else {
  //   return <>loading</>
  // }
}

export default function Login() {
  if (typeof window === "undefined") return
  return <AptosLoginPage />
}