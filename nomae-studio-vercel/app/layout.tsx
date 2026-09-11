import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';
export const metadata:Metadata={title:'Nomae Studio — Prêt-à-porter contemporain. Lille.',description:"Des vêtements qu'on porte vraiment.",icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
