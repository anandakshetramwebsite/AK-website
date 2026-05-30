import { redirect } from "next/navigation";

/** Version 1 is the live site at /. This route kept for old links. */
export default function Version1RedirectPage() {
  redirect("/");
}
