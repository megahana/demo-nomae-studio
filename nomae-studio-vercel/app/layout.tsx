import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Nomae Studio — Prêt-à-porter contemporain. Lille.',description:"Des vêtements qu'on porte vraiment.",icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
