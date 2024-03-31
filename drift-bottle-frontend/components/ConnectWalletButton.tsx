"use client"

import { GOOGLE_CLIENT_ID } from '@/app/core/constants';
import useEphemeralKeyPair from '@/app/core/useEphemeralKeyPair';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const redirectUri = 'http://localhost:3000/aptos-login/callback'


export default function ConnectWalletButton() {
  const ephemeralKeyPair = useEphemeralKeyPair();
  const redirectUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  const searchParams = new URLSearchParams({
    /**
     * Replace with your own client ID
     */
    client_id: GOOGLE_CLIENT_ID,
    /**
     * The redirect_uri must be registered in the Google Developer Console. This callback page
     * parses the id_token from the URL fragment and combines it with the ephemeral key pair to
     * derive the keyless account.
     *
     * window.location.origin == http://localhost:5173
     */
    redirect_uri: redirectUri,
    /**
     * This uses the OpenID Connect implicit flow to return an id_token. This is recommended
     * for SPAs as it does not require a backend server.
     */
    response_type: "id_token",
    scope: "openid email profile",
    nonce: ephemeralKeyPair.nonce,
  });
  redirectUrl.search = searchParams.toString();
  return (
    <Button
      as={Link}
      target="_self"
      href={redirectUrl.toString()}
      color="success"
      className="bg-gradient-to-tr from-green-400 to-green-600 text-white shadow-lg"
      startContent={<FcGoogle size={22} />}
    >
      Login With Google
    </Button>
  )
}