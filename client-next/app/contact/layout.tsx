// app/contact/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Suna Motors Bazaar | Migori Car Dealer',
    description: 'Have questions about a car, land, or property in Migori? Contact Suna Motors Bazaar. Call 0728166487 or visit us today.',
    openGraph: {
        title: 'Contact Suna Motors Bazaar',
        description: 'The best car and property deals in Migori County.',
        type: 'website',
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}