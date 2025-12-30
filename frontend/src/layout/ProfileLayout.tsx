import ProfileHeader from "../components/Header/ProfileHeader";
import ProfileSidebar from "../components/Sidebar/ProfileSidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProfileSidebar />
      <div className="flex-1">
        <ProfileHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
