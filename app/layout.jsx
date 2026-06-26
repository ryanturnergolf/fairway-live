import './globals.css';

export const metadata = {
  title: 'FairwayLive | College Golf Live Scoring',
  description: 'Live scoring, leaderboards, pairings, and tournament administration for college golf.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
