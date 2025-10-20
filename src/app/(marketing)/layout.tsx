import { SiteShell } from '@/components/layout/SiteShell';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
