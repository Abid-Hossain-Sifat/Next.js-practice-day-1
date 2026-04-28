import Link from "next/link"
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

const DashLayout = async ({children}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    {children}
    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><Link href="/dashboard/profile">Profile</Link></li>
      <li><Link href="/dashboard/revenue">Revenue</Link></li>
      <li><Link href="/dashboard">Dashboard</Link></li>
    </ul>
  </div>
</div>
  )
}

export default DashLayout
