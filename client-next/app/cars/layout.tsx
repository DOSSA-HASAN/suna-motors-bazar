// app/cars/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Used Cars for Sale in Migori | Suna Bazaar Inventory',
    description: 'Browse our wide range of quality used cars, from Toyota to Nissan. Great prices and verified vehicles in Migori County.',
    keywords: ['Cars for sale Migori', 'Suna Bazaar', 'Used cars Kenya', 'Buy cars Migori'],
};

export default function CarsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}